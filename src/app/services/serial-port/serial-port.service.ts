import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SerialPortService {
  private port: SerialPort | undefined;

  public async select(): Promise<SerialPort> {
    const options: SerialOptions = {
      baudRate: 1953,
      dataBits: 8,
      stopBits: 1,
      parity: "none"
    };

    const port = await navigator.serial.requestPort();
    await port.open(options);
    this.port = port;

    return this.port;
  }

  public async request(chunk: any): Promise<any[]> {
    await this.write(chunk);
    return await this.read();
  }

  private async write(chunk: any): Promise<void> {
    if (this.port === undefined) throw "No serial port selected";

    const writer = this.port.writable.getWriter();
    try {
      await writer.write(chunk);
    } finally {
      writer.releaseLock();
    }

    return;
  }

  private async read(): Promise<any[]> {
    if (this.port === undefined) throw "No serial port selected";

    const values = [];
    while (this.port.readable) {
      const reader = this.port.readable.getReader();
      try {
        while (true) {
          const { value, done } = await reader.read();
          values.push(value);
          if (done) break;
        }
      } finally {
        reader.releaseLock();
      }
    }

    return values;
  }
}
