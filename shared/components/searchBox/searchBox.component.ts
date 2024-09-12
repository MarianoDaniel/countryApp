import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Output() onValue = new EventEmitter<string>();

  emitValue(value: string) {
    if (!value) return;
    this.onValue.emit(value)
  }
}
