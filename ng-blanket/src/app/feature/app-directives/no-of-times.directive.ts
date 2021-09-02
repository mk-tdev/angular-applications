import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNoOfTimes]'
})
export class NoOfTimesDirective {
  @Input('appNoOfTimes') set render(times: number) {

    this.viewContainer.clear();

    for (let index = 0; index < times; index++) {
      // template & context object

      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: index,
      })
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {
  }

}
