import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Input() initialValue: string = '';
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe(value => this.onDebounce.emit(value));
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
  /* En desuso, remplazada por el debouncer del ngOnInit */
  /*   emitValue(value: string) {
      if (!value) return;
      this.onValue.emit(value)
    } */

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
