import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { IEmployee } from '../../interfaces/interfaces';
import 'rxjs/add/operator/debounceTime';
import { log } from 'util';
import * as cryptojs from 'crypto-js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  employees:IEmployee[]=[];
  inputEmail: string;
  inputPassword: string;
  validEmail: boolean;
  validPassword: boolean;
  loginMessage: string;
  currentEmployee: IEmployee;
  errorMessage: string;
 
  
  constructor(private _router:Router, public loginService: LoginService, private _formbuilder: FormBuilder, private _dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this._formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this._dataService.getEmployees().subscribe(data => { // getting the employee's data from the service.
      this.employees = data;     
    },
    error => this.errorMessage = <any>error);

    this.loginForm.get('email').valueChanges.subscribe(value => { // to dynamically check and validate user's email 
      this.checkEmail(value);
    })

    this.loginForm.get('password').valueChanges.subscribe(value => { // to dynamically check and validate user's password 
      this.checkPassword(value);
    })
    
    if(this.loginService.redirectUrl) {
    this.loginMessage = this.loginService.redirectMessage; // to display message that user access is restricted to certain pages unless user logs in.
    }


    // Encrypt 
    // var ciphertext = cryptojs.AES.encrypt('', '76787');
    // console.log(ciphertext);
    
    // // Decrypt 
    // var bytes = cryptojs.AES.decrypt(ciphertext.toString(), '76787');
    // console.log(bytes);

    // var plaintext = bytes.toString(cryptojs.enc.Utf8);

    // console.log(plaintext);
  }

  checkEmail(email): void { // to check and match email
      this.validEmail = false;
      this.inputEmail = email;
        this.employees.map((employee) => {
       if(employee.email===this.inputEmail) {
         this.validEmail = true;
         this.currentEmployee  = employee;
       }
     })
  }

  checkPassword(password): void { // to check and match password 
    this.validPassword = false;
    this.inputPassword = password;
    this.employees.map((employee) => {
     if((employee.password === this.inputPassword) && (this.currentEmployee.email === employee.email) ) { // to check if the email and password details are of same employee
       this.validPassword = true;
       sessionStorage.setItem("currentJMSUser", JSON.stringify(employee));
     }
   })
  }

  login(): void {
    this.loginService.signedInOut(true); // sending true if the user logs in.
    if(this.loginService.redirectUrl) { // checking if redirectUrl is present to navigate user to that url after the user logs in.
      this._router.navigateByUrl(this.loginService.redirectUrl);
    } else {
      this._router.navigate(['/home']);  
    }
  }


  getcipherText(){
    var rawStr = "hewefsd 1";
    var wordArray = cryptojs.enc.Utf8.parse(rawStr);
    var base64 = cryptojs.enc.Base64.stringify(wordArray);
    console.log('encrypted:', base64);
    return base64.toString();
  }
}
