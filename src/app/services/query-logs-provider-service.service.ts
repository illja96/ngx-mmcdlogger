import { Injectable } from '@angular/core';
import { QueryLog } from '../models/queries/query-log';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryLogsProviderService {
  public get log(): Observable<QueryLog | undefined> { return this.logSubject.asObservable() };
  public get logs(): Observable<QueryLog[]> { return this.logsSubject.asObservable() };

  private readonly logSubject = new BehaviorSubject<QueryLog | undefined>(undefined);
  private readonly logsSubject = new BehaviorSubject<QueryLog[]>([]);

  public next(log: QueryLog): void {
    this.logSubject.next(log);
    this.logsSubject.next([...this.logsSubject.getValue(), log]);
  }
}
