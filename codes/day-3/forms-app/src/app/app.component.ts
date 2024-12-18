import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // username = new FormControl('')
  // password = new FormControl('')

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  submit() {
    // console.log(this.username.value);
    // console.log(this.password.value);
    // console.log(this.loginForm.get('username')?.value)
    // console.log(this.loginForm.get('password')?.value)
    console.log(this.loginForm.value);
  }
}
