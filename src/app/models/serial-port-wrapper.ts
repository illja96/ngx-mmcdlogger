export class SerialPortWrapper {
  constructor(private readonly serialPort: SerialPort) { }

  public async request(uint8: number): Promise<any[]> {
    const data = new Uint8Array([uint8]);
    await this.write(data);
    return await this.read();
  }

  public async close(): Promise<void> {
    await this.serialPort.close();
  }

  private async write(data: Uint8Array): Promise<void> {
    const writer = this.serialPort.writable.getWriter();
    try {
      await writer.write(data);
    } finally {
      writer.releaseLock();
    }

    return;
  }

  private async read(): Promise<any[]> {
    const values = [];
    while (this.serialPort.readable) {
      const reader = this.serialPort.readable.getReader();
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
