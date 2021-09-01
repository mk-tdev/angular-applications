import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStyleClass]'
})
export class StyleClassDirective {
  // @Input() elemColor!: string;

  @Input('appStyleClass') set elemColor(color: string) {
    this.element.nativeElement.style.color = color;
  }

  constructor(
    private element: ElementRef,
  ) {
    // console.log('Initiated: ', element.nativeElement);

    this.element.nativeElement.style.color = this.elemColor;
  }

}
