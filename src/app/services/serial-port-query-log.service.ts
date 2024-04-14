import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, mergeMap, of, switchMap, tap, zip } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { SerialPortProviderService } from './serial-port-provider.service';
import { MonitorStateProviderService } from './monitor-state-provider.service';
import { QueryLog } from '../models/queries/query-log';
import { GlobalAlertService } from './global-alert.service';

@Injectable({ providedIn: 'root' })
export class SerialPortQueryLogService {
  public get log(): Observable<QueryLog | undefined> { return this.logSubject.asObservable() };

  private port: SerialPortWrapper | undefined = undefined;
  private isWorking: boolean = false;
  private readonly logSubject = new BehaviorSubject<QueryLog | undefined>(undefined);

  constructor(
    private readonly serialPortProvider: SerialPortProviderService,
    private readonly monitorStateProvider: MonitorStateProviderService,
    private readonly globalAlertService: GlobalAlertService) {
    this.serialPortProvider.port.subscribe(port => this.port = port);
  }

  public start(): void {
    this.isWorking = true;

    while (this.isWorking === true) {
      const log: QueryLog = {
        date: Date.now()
      };

      this.monitorStateProvider.queryState
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

  public stop(): void {
    this.isWorking = false;
  }
}
