import { Pipe, PipeTransform } from '@angular/core';
import { QueryValueHelper } from '../models/queries/query-value-helper';

@Pipe({
  standalone: true,
  name: 'uint8BitArray'
})
export class Uint8BitArrayPipe implements PipeTransform {
  public transform(value: number): string {
    return QueryValueHelper.uintToBitArray(value, 8)
      .map(_ => _ === true ? "1" : "0")
      .join("");
  }
}