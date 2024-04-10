import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SerialPortWrapper } from '../../models/serial-port-wrapper';

@Injectable({ providedIn: 'root' })
export class SerialPortProviderService {
  public get port(): Observable<SerialPortWrapper | undefined> {
    return this.portSubject.asObservable();
  }

  private portSubject: BehaviorSubject<SerialPortWrapper | undefined> = new BehaviorSubject<SerialPortWrapper | undefined>(undefined);

  public async select(baudRate: 1920 | 1953 | 8192 | 9600): Promise<void> {
    const options: SerialOptions = {
      baudRate: baudRate,
      dataBits: 8,
      stopBits: 1,
      parity: "none"
    };

    const serialPort = await navigator.serial.requestPort();
    await serialPort.open(options);

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
