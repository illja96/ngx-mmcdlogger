import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';

@Injectable({ providedIn: 'root' })
export class SerialPortProviderService {
  public get port(): Observable<SerialPortWrapper | undefined> { return this.portSubject.asObservable(); }

  private readonly portSubject = new BehaviorSubject<SerialPortWrapper | undefined>(undefined);

  public async select(): Promise<void> {
    const serialPort = await navigator.serial.requestPort();

    const serialPortWrapper = new SerialPortWrapper(serialPort);
    this.portSubject.next(serialPortWrapper);
  }

  public async close(): Promise<void> {
    const serialPortWrapper = this.portSubject.getValue();
    if (serialPortWrapper === undefined) return;

    await serialPortWrapper.close();
    this.portSubject.next(undefined);
  }
}
