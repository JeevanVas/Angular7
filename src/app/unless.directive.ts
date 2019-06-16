import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]' //custom structural directive
})
export class UnlessDirective {
  // unless is referenced here as a opposite of 'if'
  // The property name 'appUnless' has to be same as selector when it is used as property binding in element (custom structural directive)
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
