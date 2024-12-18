import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorReactiveComponent } from './calculator-reactive.component';

describe('CalculatorReactiveComponent', () => {
  let component: CalculatorReactiveComponent;
  let fixture: ComponentFixture<CalculatorReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
