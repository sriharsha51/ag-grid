import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: boolean;

  constructor(public loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = (sessionStorage.JMSloggedIn==='true'); // checking if the user is logged in and storing true or false in isLoggedIn.
  }

  signOut(): void {
    this.loginService.signedInOut(false); // passing false when the user signs out and passing true when the user logs in.
    this._router.navigate(['/home']); // redirecting to home page once the user signs out.
  }

}
