import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() newNumberPicked = new EventEmitter<number>();
  currentNumber = 0;

  interval;

  onNewNumberPicked(num: number) {
    this.newNumberPicked.emit(num);
  }

  onStopInterval() {
    clearInterval(this.interval);
  }

  onStartGame() {
    console.log(this.currentNumber);
    this.interval = setInterval(() => {
      this.currentNumber = this.currentNumber + 1;
      this.onNewNumberPicked(this.currentNumber);
    }, 1000);
  }

  constructor() {}

  ngOnInit() {}
}
