import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'angular-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ElementComponent {
  @Input() title: string; // Card title
  @Input() description: string; // Card description
  @Input() content: string;
  @Input() fname: string; // Unique name of the card frame

  @Output() deleteCardNotify = new EventEmitter<boolean>();

  handleCardDelete() {
    this.deleteCardNotify.emit(true);
  }
}
