import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { ViewEventComponent } from './view-event/view-event.component';
import { IEvent } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import * as cryptojs from 'crypto-js';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: IEvent[];
  _eventFilter: string;
  filteredEvents: IEvent[];
  showFilteredBy: boolean;
  errorMessage: string;
  
  @ViewChild(ViewEventComponent) viewEvent: ViewEventComponent; // to access the child component properties

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getEvents().subscribe(data => {
      this.events = data;
      this.filteredEvents = this.events; // we are using filteredEvents array to filter, so that we dont lose the actual events data.
   },
   error => this.errorMessage = <any>error);
 }

 get eventFilter(): string { // we are using getter and setter to dynamically search the events data as the user enters the value.
     return this._eventFilter;
 }
 set eventFilter(value: string){
     this._eventFilter = value; // _eventFilter is used to get and set the value of eventFilter
     this.showFilteredBy = this.eventFilter ? true : false; // we are displaying by what search term the data is being filtered by.
     this.filteredEvents = this.eventFilter ? this.filter(this.eventFilter) : this.events; // we are filtering the data from the events array and storing it in the filteredEvents array. 
 }

 filter(filterBy): IEvent[] { 
  filterBy = filterBy.toLocaleLowerCase();
  return this.events.filter((event: IEvent) =>
        event.eventName.toLocaleLowerCase().indexOf(filterBy) !== -1);
 }

 openViewEventModal(event: IEvent): void {  // we are storing the current event details in the eventDetails property of child component to display the current event details in the modal.
   this.viewEvent.eventDetails = event;
 }

 getcipherText(i){
  var rawStr = i.toString();
  var wordArray = cryptojs.enc.Utf8.parse(rawStr);
  var base64 = cryptojs.enc.Base64.stringify(wordArray);
  console.log('encrypted:', base64);
  return base64.toString();
}
}
