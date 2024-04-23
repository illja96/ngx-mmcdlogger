import { Injectable } from '@angular/core';
import { Query } from '../models/queries/query';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueriesProviderService {
  public get activeQueries(): Observable<Query[] | undefined> { return this.activeQueriesSubject.asObservable() };
  public get chartQueries(): Observable<Query[] | undefined> { return this.chartQueriesSubject.asObservable() };

  private readonly activeQueriesSubject = new BehaviorSubject<Query[] | undefined>(undefined);
  private readonly chartQueriesSubject = new BehaviorSubject<Query[] | undefined>(undefined);

  private readonly activeQueriesKey = "activeQueries";
  private readonly chartQueriesKey = "chartQueries";

  public hydrate(): void {
    this.hydrateActiveQueries();
    this.hydrateChartQueries();
  }

  public addToActiveQueries(query: Query): void {
    let queries = this.activeQueriesSubject.getValue();
    const queryIndex = queries!.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    queries = [...queries!, query];
    this.activeQueriesSubject.next(queries);

    const json = JSON.stringify(queries);
    localStorage.setItem(this.activeQueriesKey, json);
  }

  public removeFromActiveQueries(query: Query): void {
    const queries = this.activeQueriesSubject.getValue();
    const queryIndex = queries!.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    queries!.splice(queryIndex, 1);
    this.activeQueriesSubject.next(queries);

    const json = JSON.stringify(queries);
    localStorage.setItem(this.activeQueriesKey, json);
  }

  public addToChartQueries(query: Query): void {
    let queries = this.chartQueriesSubject.getValue();
    const queryIndex = queries!.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    queries = [...queries!, query];
    this.chartQueriesSubject.next(queries);

    const json = JSON.stringify(queries);
    localStorage.setItem(this.chartQueriesKey, json);
  }

  public removeFromChartQueries(query: Query): void {
    const queries = this.chartQueriesSubject.getValue();
    const queryIndex = queries!.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    queries!.splice(queryIndex, 1);
    this.chartQueriesSubject.next(queries);

    const json = JSON.stringify(queries);
    localStorage.setItem(this.chartQueriesKey, json);
  }

  private hydrateActiveQueries(): void {
    let queries: Query[] = [];
    let json = localStorage.getItem(this.activeQueriesKey);
    if (json === null) {
      json = JSON.stringify(queries);
      localStorage.setItem(this.activeQueriesKey, json);
    }
    else {
      queries = JSON.parse(json) as Query[];
    }

    this.activeQueriesSubject.next(queries);
  }

  private hydrateChartQueries(): void {
    let queries: Query[] = [];
    let json = localStorage.getItem(this.chartQueriesKey);
    if (json === null) {
      json = JSON.stringify(queries);
      localStorage.setItem(this.chartQueriesKey, json);
    } else {
      queries = JSON.parse(json) as Query[];
    }

    this.chartQueriesSubject.next(queries);
  }
}
