import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'angular-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElementComponent {
  MAINTENANCE_LIFECYCLE = "MAINTENANCE"
  @Input() title: string; // Card title
  @Input() description: string; // Card description
  @Input() content: string;
  @Input() uid: string; // Unique name of the card
  @Input() lifecycle: string;

  constructor(
    private el: ElementRef
  ) {}

  handleCardDelete() {
    this.el.nativeElement
      .dispatchEvent(new CustomEvent('deleteCardNotify', {
        detail: this.uid,
        bubbles: true,
        composed: true
      }));
  }

  isMaintenanceMode() {
    return (this.lifecycle === this.MAINTENANCE_LIFECYCLE);
  }
}
