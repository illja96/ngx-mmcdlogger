export class QueryValueHelper {
  public static uint16(values: number[]): number {
    if (values.length !== 2) throw new Error("Invalid uint16 input values");
    return (((values[1] & 0xff) << 8) | (values[0] & 0xff));
  }

  public static uint24(values: number[]): number {
    if (values.length !== 3) throw new Error("Invalid uint24 input values");
    return (((values[2] & 0xff) << 16) | (values[1] & 0xff) << 8) | (values[0] & 0xff);
  }

  public static uint16ToBitArray(value: number): boolean[] {
    const uint16Array = new Uint16Array(value);
    return [...Array(16)].map((v, i) => (uint16Array[0] >> i & 1) === 1);
  }
}