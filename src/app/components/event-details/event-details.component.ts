import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../../interfaces/interfaces";
import * as cryptojs from 'crypto-js';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-detail-component.css']
})

export class EventDetailsComponent implements OnInit {

    encrypted;
    events: any[] =[];
    index: number;
    event: any;
    parsedWordArray;
    parsedStr;
    constructor(private _dataService: DataService, private _activatedRoute: ActivatedRoute) {
    
    }

    ngOnInit(): void {
        this._dataService.getEvents().subscribe(data => {
          this.events = data;
        //   this.setEvent();
          console.log(this._activatedRoute.snapshot.params['index']);
          this.encrypted=this._activatedRoute.snapshot.params['index'];
           // we are using filteredEvents array to filter, so that we dont lose the actual events data.
            this.parsedWordArray = cryptojs.enc.Base64.parse(this.encrypted);
            this.parsedStr = this.parsedWordArray.toString(cryptojs.enc.Utf8);
            console.log("parsed:", this.parsedStr);
            this.setEvent(this.parsedStr);
       },
       error => console.log(error));
       
       
     }

     setEvent(value) {
        this.index = +value;
        console.log(this.index);
        this.event = this.events[this.index];
        
     }

}