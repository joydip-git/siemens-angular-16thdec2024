import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator-reactive',
  templateUrl: './calculator-reactive.component.html',
  styleUrl: './calculator-reactive.component.css'
})
export class CalculatorReactiveComponent {
  choice = 0
  result: number | null | undefined = 0

  calcForm = new FormGroup(
    {
      inputFirst: new FormControl(0),
      inputSecond: new FormControl(0)
    }
  )

  updateChoice(value: number) {
    this.choice = value
  }

  get firstInput() {
    return this.calcForm.get('inputFirst')
  }
  get secondInput() {
    return this.calcForm.get('inputSecond')
  }

  calculate() {
    if (this.firstInput && this.secondInput && this.firstInput.value && this.secondInput.value) {
      switch (this.choice) {
        case 1:
          this.result = this.firstInput.value + this.secondInput.value
          break;

        case 2:
          this.result = this.firstInput.value - this.secondInput.value
          break;

        case 3:
          this.result = this.firstInput.value * this.secondInput.value
          break;

        case 4:
          this.result = this.firstInput.value / this.secondInput.value
          break;

        default:
          break;
      }
    }
  }
}
