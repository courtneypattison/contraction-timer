import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(milliseconds: number, format?: string): string {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);

    if (format === ':') {
      return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    } else {
      return minutes ? `${minutes}m ${seconds}s` : `${seconds}s`;
    }
  }
}
