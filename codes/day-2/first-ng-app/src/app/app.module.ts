import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SampleComponent } from "./sample/sample.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  //register components(s), pipe(s) and directive(s)
  declarations: [
    AppComponent,
    SampleComponent
  ],

  //register service(s)
  providers: [],

  //register angular built-in modules and/or application feature modules
  imports: [BrowserModule],

  //mention bootstrapper component(s) as registered with this module
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module created');
  }
}