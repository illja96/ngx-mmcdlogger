import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { SerialPortProviderService } from './serial-port-provider.service';
import { QueryLog } from '../models/queries/query-log';
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

  constructor(private readonly serialPortProvider: SerialPortProviderService) {
    this.serialPortProvider.port.subscribe(port => this.port = port);
  }

  public addToQuery(query: Query): void {
    let queries = this.queriesSubject.getValue();
    const queryIndex = queries.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    queries = [...queries, query];
    this.queriesSubject.next(queries);
    console.log(queries);

    const queriesJson = JSON.stringify(queries);
    localStorage.setItem("queries", queriesJson);
  }

  public removeFromQuery(query: Query): void {
    const queries = this.queriesSubject.getValue();
    const queryIndex = queries.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    queries.splice(queryIndex, 1);
    this.queriesSubject.next(queries);
    console.log(queries);

    const queriesJson = JSON.stringify(queries);
    localStorage.setItem("queries", queriesJson);
  }

  public async startSingle(queries: Query[]): Promise<number[]> {
    try {
      if (this.portBusy === true) throw new Error("Serial port busy");
      this.portBusy = true;

      const responses: number[] = [];
      for (let query of queries) {
        await this.port!.request(query.address)
          .then(value => responses.push(value));
      }

      return responses;
    }
    finally {
      this.portBusy = false;
      this.portQueryAborted = false;
    }
  }

  public async startContinuous(): Promise<void> {
    try {
      if (this.portBusy === true) throw new Error("Serial port busy");
      this.portBusy = true;

      while (this.portQueryAborted === false) {
        const log: QueryLog = {
          date: Date.now()
        };

        const queries = this.queriesSubject.getValue();
        console.log(queries);
        for (const query of queries) {
          console.log(query);

          const queryRawValue = await this.port!.request(query.address);
          const queryValue = query.formula(queryRawValue);
          log[query.propertyName] = queryValue;

          this.logSubject.next(log);
        }
        this.logsSubject.next([...this.logsSubject.value, log]);
      }
    }
    finally {
      this.portBusy = false;
      this.portQueryAborted = false;
    }
  }

  public stopContinuous(): void {
    this.portQueryAborted = true;
  }
}
