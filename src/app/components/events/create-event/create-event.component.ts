import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup

  today = new Date();
  isError: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createEventForm = this._formBuilder.group({
      eventName:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      eventId: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      judgeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      defendantName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      roomNumber: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
      caseNumber: ['', [Validators.required, Validators.min(1), Validators.max(9999)]]
    })

    this.createEventForm.get('date').valueChanges.subscribe(value => { // watch the user enter the date.
      this.validateDate(value);
    })
  }

  validateDate(selectedDate): void { // to validate date
    if(new Date(new Date(selectedDate)) < this.today) { // to check if the selected date is past or current date. To create event, selected date should be greater than current date.
      this.isError = true;
   } else {
      this.isError = false; 
   }
  }

}
