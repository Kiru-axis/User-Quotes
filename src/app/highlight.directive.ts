import { Directive,ElementRef,HostListener, Input  } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightText: string ="{{quote.description}}"

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("blue");
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}