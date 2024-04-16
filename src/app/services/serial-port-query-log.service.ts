import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom, from, mergeMap, of, switchMap, take, tap, toArray, zip } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { SerialPortProviderService } from './serial-port-provider.service';
import { QueryLog } from '../models/queries/query-log';
import { GlobalAlertService } from './global-alert.service';
import { Query } from '../models/queries/query';

@Injectable({ providedIn: 'root' })
export class SerialPortQueryLogService {
  public get queries(): Observable<Query[]> { return this.queriesSubject.asObservable(); }
  public get log(): Observable<QueryLog | undefined> { return this.logSubject.asObservable() };
  public get logs(): Observable<QueryLog[]> { return this.logsSubject.asObservable() };

  private readonly queriesSubject = new BehaviorSubject<Query[]>([]);
  private readonly logSubject = new BehaviorSubject<QueryLog | undefined>(undefined);
  private readonly logsSubject = new BehaviorSubject<QueryLog[]>([]);

  private port: SerialPortWrapper | undefined = undefined;
  private portBusy: boolean = false;
  private portQueryAborted: boolean = false;

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

  public startSingle(queries: Query[]): Observable<number[]> {
    try {
      if (this.portBusy === true) throw new Error("Serial port busy");
      this.portBusy = true;

      return of(queries)
        .pipe(
          mergeMap(queries => queries, 1),
          switchMap(query => this.port!.request(query.address)),
          toArray());
    }
    finally {
      this.portBusy = false;
      this.portQueryAborted = false;
    }
  }

  public startContinuous(): void {
    try {
      if (this.portBusy === true) throw new Error("Serial port busy");
      this.portBusy = true;

      while (this.portQueryAborted === false) {
        const log: QueryLog = {
          date: Date.now()
        };

        this.queriesSubject
          .pipe(
            take(1),
            mergeMap(queries => queries, 1),
            switchMap(query => zip(of(query), from(this.port!.request(query.address)))),
            tap(zip => log[zip[0].propertyName] = zip[1]))
          .subscribe({
            next: () => this.logSubject.next(log),
            error: error => this.globalAlertService.display({ type: "danger", title: "Query failed", text: error.message, dismissible: true, timeout: 10000 }),
            complete: () => this.logsSubject.next([...this.logsSubject.value, log])
          });
      }
    }
    finally {
      this.portBusy = false;
      this.portQueryAborted = false;
    }
  }

  public stopContinuous(): void {
    this.portQueryAborted = false;
  }
}
