import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  choice = 0
  first = 0
  second = 0
  result = 0

  updateChoice(value: number) {
    this.choice = value
  }

  calculate() {
    switch (this.choice) {
      case 1:
        this.result = this.first + this.second
        break;
      case 2:
        this.result = this.first - this.second
        break;
      case 3:
        this.result = this.first * this.second
        break;
      case 4:
        this.result = this.first / this.second
        break;
      default:
        break;
    }
  }
}
