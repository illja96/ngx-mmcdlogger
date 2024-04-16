import { SerialPort as SerialPortPolyfill } from 'web-serial-polyfill';

export class SerialPortWrapper {
  private readonly options: SerialOptions = {
    baudRate: 1953,
    dataBits: 8,
    stopBits: 1,
    parity: "none"
  };

  constructor(private readonly serialPort: SerialPort | SerialPortPolyfill) { }

  public async request(uint8: number): Promise<number> {
    let writer: WritableStreamDefaultWriter<Uint8Array> | undefined;
    let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;

    try {
      if (this.serialPort.writable === null && this.serialPort.readable === null) await this.serialPort.open(this.options);
    } catch {
      throw new Error("Failed to open serial port");
    }

    try {
      writer = this.serialPort.writable!.getWriter();
    } catch {
      writer?.releaseLock();
      throw new Error("Failed to open serial port writer");
    }

    try {
      reader = this.serialPort.readable!.getReader();
    } catch {
      reader?.releaseLock();
      throw new Error("Failed to open serial port reader");
    }

    try {
      const writeDate = Date.now();
      const writeData = new Uint8Array([uint8]);
      await Promise.race([
        writer.write(writeData),
        new Promise((resolve, reject) => setTimeout(() => { reject(new Error("Serial port write timeout")); }, 1000))
      ]);

      while (Date.now() - writeDate < 10000) {
        const readData = await Promise.race([
          reader.read(),
          new Promise<ReadableStreamReadResult<Uint8Array>>((resolve, reject) => setTimeout(() => { reject(new Error("Serial port initial read timeout")); }, 10000))
        ]);

        if (readData.value?.length != 2) continue;
        if (writeData[0] != readData.value[0]) throw new Error("Serial data are inconsistent");

        return readData.value[1];
      }

      throw new Error("Serial data sequential read timeout");
    }
    finally {
      writer?.releaseLock();
      reader?.releaseLock();
    }
  }

  public async close(): Promise<void> {
    await this.serialPort.close();
  }
}
