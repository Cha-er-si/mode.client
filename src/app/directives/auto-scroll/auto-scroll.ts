import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoScroll]',
})
export class AutoScroll implements AfterViewChecked {
  constructor(private element: ElementRef) {}

  ngAfterViewChecked(): void {
    this.element.nativeElement.scrollTop =
      this.element.nativeElement.scrollHeight;
  }
}
