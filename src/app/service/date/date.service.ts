import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(private datePipe: DatePipe) {}

  public get dateToday(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')!.toString();
  }
}
