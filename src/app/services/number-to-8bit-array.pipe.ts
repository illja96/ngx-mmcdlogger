import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'numberTo8BitArray'
})
export class NumberTo8BitArrayPipe implements PipeTransform {
  public transform(value: number): string {
    const valueBitArray = value.toString(2);
    const valueRaw8BitArray = "0000000" + valueBitArray;
    const value8BitArray = valueRaw8BitArray.substring(valueRaw8BitArray.length - 8, valueRaw8BitArray.length);
    return value8BitArray;
  }
}