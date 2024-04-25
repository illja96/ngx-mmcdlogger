export class QueryValueHelper {
  public static uint16(values: number[]): number {
    if (values.length !== 2) throw new Error("Invalid uint16 input values");
    return (((values[1] & 0xff) << 8) | (values[0] & 0xff));
  }

  public static uint24(values: number[]): number {
    if (values.length !== 3) throw new Error("Invalid uint24 input values");
    return (((values[2] & 0xff) << 16) | (values[1] & 0xff) << 8) | (values[0] & 0xff);
  }

  public static uintToBitArray(value: number, bits: 8 | 16 | 24): boolean[] {
    if (value < 0) throw new Error("Value out of range: can't be negative");
    return [...Array(bits)].map((x, i) => (value >> i & 1) == 1).reverse();
  }
}