import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter/store/actions.counter';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
  }

  onIncrement (){
    this.store.dispatch(increment())
  }

  onDecrement(){
  this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

}
