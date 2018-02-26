import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private _formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this._formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      empId: ['', [Validators.required]],
      email: ['', [Validators.required, this.validateEmail]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), this.validatePassword]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.matchingPasswords('password', 'confirmPassword')})
  }

  validateEmail(controls): {[key: string]: boolean} | null { // validating email using pattern
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null; 
        } else {
      return { 'validateEmail': true } 
    }
  }

  validatePassword(controls): {[key: string]: boolean} | null { // validating password using pattern
    const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/);
    if (regExp.test(controls.value)) {
      return null; 
        } else {
      return { 'validatePassword': true } 
    }
    
  }
  

  matchingPasswords(password: string, confirmPassword: string) { // checking password and confirm password input fields.
    return (group: FormGroup) => {
      if(group.controls[password].value === group.controls[confirmPassword].value) {
        return null;
      } else {
        return { 'matchingPasswords': true }
      }
    }
  }

}
