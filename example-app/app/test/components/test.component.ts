import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../reducers/counter';

interface AppState {
  counter: any;
}

@Component({
  selector: 'test',
  template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ counter }}</div>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `,
  styles: [],
})
export class TestComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    store.select('counter').subscribe(val => {
      this.counter = val.counter;
    });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
