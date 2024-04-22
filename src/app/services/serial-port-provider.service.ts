import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SerialPortWrapper } from '../models/serial-port-wrapper';
import { serial as serialpolyfill, SerialPort as SerialPortPolyfill } from 'web-serial-polyfill';

@Injectable({ providedIn: 'root' })
export class SerialPortProviderService {
  public get port(): Observable<SerialPortWrapper | undefined> { return this.portSubject.asObservable(); }

  private readonly portSubject = new BehaviorSubject<SerialPortWrapper | undefined>(undefined);

  private readonly serialPortOptions: SerialOptions = {
    baudRate: 1953,
    dataBits: 8,
    stopBits: 1,
    parity: "none"
  };

  public async select(): Promise<void> {
    const serialPort = navigator.serial !== undefined ? await navigator.serial.requestPort() : await serialpolyfill.requestPort();
    await serialPort.open(this.serialPortOptions);
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
