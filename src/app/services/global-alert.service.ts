import { Injectable } from '@angular/core';
import { GlobalAlertInfo } from '../models/global-alert-info';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalAlertService {
  public get alert(): Observable<GlobalAlertInfo> { return this.alertSubject.asObservable(); }

  private readonly alertSubject: Subject<GlobalAlertInfo> = new Subject<GlobalAlertInfo>();

  public display(info: GlobalAlertInfo): void {
    this.alertSubject.next(info);
  }
}
