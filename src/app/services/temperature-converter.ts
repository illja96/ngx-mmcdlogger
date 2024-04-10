export class TemperatureConverter {
  public static CtoK(x: number): number {
    return x + 273.15;
  }

  public static CtoF(x: number): number {
    return (x * 9 / 5) + 32;
  }

  public static FtoC(x: number): number {
    return 5 / 9 * (x - 32);
  }

  public static FtoK(x: number): number {
    return (x - 32) * 5 / 9 + 273.15;
  }
}