import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, mergeMap, of, switchMap, tap, zip } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { SerialPortProviderService } from './serial-port-provider.service';
import { QueryLog } from '../models/queries/query-log';
import { GlobalAlertService } from './global-alert.service';
import { Query } from '../models/queries/query';

@Injectable({ providedIn: 'root' })
export class SerialPortQueryLogService {
  public get queries(): Observable<Query[]> { return this.queriesSubject.asObservable(); }
  public get log(): Observable<QueryLog | undefined> { return this.logSubject.asObservable() };

  private readonly queriesSubject = new BehaviorSubject<Query[]>([]);
  private readonly logSubject = new BehaviorSubject<QueryLog | undefined>(undefined);

  private port: SerialPortWrapper | undefined = undefined;
  private isWorking: boolean = false;

  constructor(
    private readonly serialPortProvider: SerialPortProviderService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProvider.port.subscribe(port => this.port = port);
  }

  public addToQuery(query: Query): void {
    let queries = this.queriesSubject.getValue();
    const queryIndex = queries.findIndex(query => query.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    queries = [...queries, query];
    this.queriesSubject.next(queries);

    const queriesJson = JSON.stringify(queries);
    localStorage.setItem("queries", queriesJson);
  }

  public removeFromQuery(query: Query): void {
    const queries = this.queriesSubject.getValue();
    const queryIndex = queries.findIndex(query_ => query.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    queries.splice(queryIndex, 1);
    this.queriesSubject.next(queries);

    const queriesJson = JSON.stringify(queries);
    localStorage.setItem("queries", queriesJson);
  }

  public async startSingle(queries: Query[]): Promise<number[]> {
    if (this.isWorking === true) throw new Error("Serial port busy");
    this.isWorking = true;

    for(let query of queries) {
      const queryResults = await this.port?.request(query.address);
    }

    of(queries)
        .pipe(
          mergeMap(queries => queries, 1),
          filter(_ => this.port !== undefined && this.isWorking === true),
          switchMap(query => zip(of(query), from(this.port!.request(query.address)))),
          tap(zip => log[zip[0].propertyName] = zip[1]))
        .subscribe({
          next: () => this.logSubject.next(log),
          error: error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 })
        });
  }

  public startContinuous(): void {
    if (this.isWorking === true) throw new Error("Serial port busy");
    this.isWorking = true;

    while (this.isWorking === true) {
      const log: QueryLog = {
        date: Date.now()
      };

      this.queriesSubject
        .pipe(
          mergeMap(queries => queries, 1),
          filter(_ => this.port !== undefined && this.isWorking === true),
          switchMap(query => zip(of(query), from(this.port!.request(query.address)))),
          tap(zip => log[zip[0].propertyName] = zip[1]))
        .subscribe({
          next: () => this.logSubject.next(log),
          error: error => this.globalAlertService.display({ type: "danger", title: "Command failed", text: error.message, dismissible: true, timeout: 10000 })
        });
    }
  }

  public stopContinuous(): void {
    this.isWorking = false;
  }
}
