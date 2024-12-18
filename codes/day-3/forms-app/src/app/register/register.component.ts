import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // username = ''
  // password = ''

  submit(frm: NgForm) {
    // console.log(this.username);
    // console.log(this.password);
    console.log(frm.form);
    console.log(frm.form.get('userName'));
    console.log(frm.form.get('pwd'));
  }
}
