import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Query } from '../models/queries/query';

@Injectable({ providedIn: 'root' })
export class MonitorStateProviderService {
  public get queryState(): Observable<Query[]> { return this.queryStateSubject.asObservable(); }
  public get chartState(): Observable<Query[]> { return this.chartStateSubject.asObservable(); }

  private readonly queryStateSubject = new BehaviorSubject<Query[]>([]);
  private readonly chartStateSubject = new BehaviorSubject<Query[]>([]);

  constructor() {
    const queryStateJson = localStorage.getItem("queryStateJson");
    if (queryStateJson !== null) {
      const queryState: Query[] = JSON.parse(queryStateJson);
      this.queryStateSubject.next(queryState);
    }

    const chartStateJson = localStorage.getItem("chartStateJson");
    if (chartStateJson !== null) {
      const chartState: Query[] = JSON.parse(chartStateJson);
      this.chartStateSubject.next(chartState);
    }
  }

  public addToQuery(query: Query): void {
    let queryState = this.queryStateSubject.getValue();
    const queryIndex = queryState.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    queryState = [...queryState, query];
    this.queryStateSubject.next(queryState);

    const queryStateJson = JSON.stringify(queryState);
    localStorage.setItem("queryStateJson", queryStateJson);
  }

  public removeFromQuery(query: Query): void {
    const queryState = this.queryStateSubject.getValue();
    const queryIndex = queryState.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    queryState.splice(queryIndex, 1);
    this.queryStateSubject.next(queryState);

    const queryStateJson = JSON.stringify(queryState);
    localStorage.setItem("queryStateJson", queryStateJson);
  }

  public addToChart(query: Query): void {
    let chartState = this.chartStateSubject.getValue();
    const queryIndex = chartState.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex !== -1) return;

    chartState = [...chartState, query];
    this.chartStateSubject.next(chartState);

    const chartStateJson = JSON.stringify(chartState);
    localStorage.setItem("chartStateJson", chartStateJson);
  }

  public removeFromChart(query: Query): void {
    const chartState = this.chartStateSubject.getValue();
    const queryIndex = chartState.findIndex(_ => _.propertyName === query.propertyName);
    if (queryIndex === -1) return;

    chartState.splice(queryIndex, 1);
    this.chartStateSubject.next(chartState);

    const chartStateJson = JSON.stringify(chartState);
    localStorage.setItem("chartStateJson", chartStateJson);
  }
}
