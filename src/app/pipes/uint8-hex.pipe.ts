import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'uint8Hex'
})
export class Uint8HexPipe implements PipeTransform {
  public transform(value: number): string {
    const stringValue = value.toString(16).toUpperCase();
    return `0x${stringValue.length === 1 ? "0" : ""}${stringValue}`;
  }
}