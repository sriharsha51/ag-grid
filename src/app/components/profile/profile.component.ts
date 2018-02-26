import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IEmployee } from '../../interfaces/interfaces';
import * as cryptojs from 'crypto-js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentEmployee: IEmployee;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.currentEmployee = JSON.parse(sessionStorage.getItem('currentJMSUser')); // getting the current user from the session storage and parsing it to JSON as it is stored in the form of string
  }

  getcipherText(){
    var rawStr = "1";
    var wordArray = cryptojs.enc.Utf8.parse(rawStr);
    var base64 = cryptojs.enc.Base64.stringify(wordArray);
    console.log('encrypted:', base64);
    return base64.toString();
  }
}
