import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Number[] = [];
  evenNumbers: Number[] = [];

  onNewNumberPicked(pickedNumber: number) {
    if (pickedNumber % 2 === 0) {
      this.evenNumbers.push(pickedNumber);
    } else {
      this.oddNumbers.push(pickedNumber);
    }
  }
}
