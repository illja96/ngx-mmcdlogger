import { SerialPort as SerialPortPolyfill } from 'web-serial-polyfill';

export class SerialPortWrapper {
  constructor(private readonly serialPort: SerialPort | SerialPortPolyfill) { }

  public async request(uint8: number): Promise<number> {
    let writer: WritableStreamDefaultWriter<Uint8Array> | undefined;
    let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;

    try {
      writer = this.serialPort.writable!.getWriter();
    } catch (error) {
      console.error(error);
      writer?.releaseLock();
      throw new Error("Failed to open serial port writer");
    }

    try {
      reader = this.serialPort.readable!.getReader();
    } catch (error) {
      console.error(error);
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

      const readDataBuffer: number[] = [];
      while (Date.now() - writeDate < 10000) {
        const readData = await Promise.race([
          reader.read(),
          new Promise<ReadableStreamReadResult<Uint8Array>>((resolve, reject) => setTimeout(() => { reject(new Error("Serial port initial read timeout")); }, 10000))
        ]);

        for (let i = 0; i < (readData.value?.length ?? 0); i++) {
          readDataBuffer.push(readData.value![i]);
        }
        console.log(readDataBuffer);
        if (readDataBuffer.length < 2) continue;
        if (readDataBuffer.length === 2) {
          if (writeData[0] !== readDataBuffer[0]) throw new Error("Serial data are inconsistent: no multiplex");
          return readDataBuffer[1];
        }
        if (readDataBuffer.length > 2) throw new Error("Serial data are inconsistent: too much read data");
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
