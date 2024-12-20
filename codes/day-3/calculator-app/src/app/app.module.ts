import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalculatorReactiveComponent } from './calculator-reactive/calculator-reactive.component';

@NgModule({
  //register components(s), pipe(s) and directive(s)
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorReactiveComponent
  ],

  //register service(s)
  providers: [],

  //register angular built-in modules and/or application feature modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  //mention bootstrapper component(s) as registered with this module
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module created');
  }
}