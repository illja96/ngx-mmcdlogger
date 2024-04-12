export class SerialPortWrapper {
  private readonly options: SerialOptions = {
    baudRate: 1953,
    dataBits: 8,
    stopBits: 1,
    parity: "none"
  };

  constructor(private readonly serialPort: SerialPort) { }

  public async request(uint8: number): Promise<number> {
    if (this.serialPort.writable === null && this.serialPort.readable === null) await this.serialPort.open(this.options);

    let writer: WritableStreamDefaultWriter<Uint8Array> = this.serialPort.writable.getWriter();
    let reader: ReadableStreamDefaultReader<Uint8Array> = this.serialPort.readable.getReader();

    try {
      const writeDate = Date.now();
      const writeData = new Uint8Array([uint8]);
      await Promise.race([
        new Promise<ReadableStreamReadResult<Uint8Array>>(e => setTimeout(() => { throw "Serial port write timeout"; })),
        writer.write(writeData)
      ]);

      while (Date.now() - writeDate < 10000) {
        const readData = await Promise.race([
          new Promise<ReadableStreamReadResult<Uint8Array>>(e => setTimeout(() => { throw "Serial port initial read timeout"; })),
          reader.read()
        ]);

        if (readData.value?.length != 2) continue;
        if (writeData[0] != readData.value[0]) {
          throw "Serial data are inconsistent";
        }

        return readData.value[1];
      }

      throw "Serial data sequential read timeout";
    } finally {
      await writer.abort();
      await writer.close();
      writer.releaseLock();

      await reader.cancel();
      reader.releaseLock();
    }
  }

  public async close(): Promise<void> {
    await this.serialPort.close();
  }
}
