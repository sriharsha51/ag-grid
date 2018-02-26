import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  eventDetails: IEvent; // getting event details through viewchild in the parent component.

  constructor() { }

  ngOnInit() {
  }

}
