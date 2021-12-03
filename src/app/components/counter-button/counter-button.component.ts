import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement (){
    this.increment.emit()
    console.log("increment")
  }

  onDecrement(){
    this.decrement.emit()
  }

  onReset(){
    this.reset.emit()
  }

}
