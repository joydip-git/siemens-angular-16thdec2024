import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { validatePassword } from '../password-validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username = new FormControl('')
  // password = new FormControl('')

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, validatePassword])
  })

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  submit() {
    // console.log(this.username.value);
    // console.log(this.password.value);
    // console.log(this.loginForm.get('username')?.value)
    // console.log(this.loginForm.get('password')?.value)
    // if (this.loginForm.get('username')?.errors) {
    //   if (this.loginForm.get('username')?.errors?.['required'])
    //     console.log('enter username');
    // }
    //console.log(this.loginForm.get('username'));
    console.log(this.loginForm.get('password')?.errors);
  }
}
