import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = (sessionStorage.JMSloggedIn==='true'); // checking if the user is logged in.
  }

}
