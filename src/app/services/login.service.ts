import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  redirectUrl: string;
  redirectMessage: string = "Please login to access the page";

  constructor() { }

  signedInOut(checkSignedIn) {
    if(checkSignedIn) { 
      sessionStorage.JMSloggedIn = "true"; // setting JMSloggedIn to true in the session storage if the user is logged in.
    } else {
      this.redirectMessage = ""; // clearing redirectMessage and the session storage if the user is not logged in.
      sessionStorage.clear();
    }
    window.location.reload();
  }

}
