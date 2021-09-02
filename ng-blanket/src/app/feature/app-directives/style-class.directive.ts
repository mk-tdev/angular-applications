import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStyleClass]'
})
export class StyleClassDirective {
  // @Input() elemColor!: string;

  // @Input('appStyleClass') set elemColor(color: string) {
  //   this.element.nativeElement.style.color = color;
  // }

  @Input('appStyleClass') set styleClassNames(styleClassObj: any) {
    for (let key in styleClassObj) {
      if (styleClassObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(
    private element: ElementRef,
  ) {
    // console.log('Initiated: ', element.nativeElement);

    // this.element.nativeElement.style.color = this.elemColor;
  }

}
