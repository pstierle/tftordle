import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowAfter]',
})
export class ShowAfterDirective implements OnInit {
  @Input()
  public appShowAfter: number = 1000;

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.visibility = 'hidden';

    setTimeout(() => {
      this.elementRef.nativeElement.style.visibility = 'visible';

      this.elementRef.nativeElement.style.animationName = 'flipInY';
      this.elementRef.nativeElement.style.animationDuration = '1s';
      this.elementRef.nativeElement.style.animationFillMode = 'both';
    }, this.appShowAfter);
  }
}
