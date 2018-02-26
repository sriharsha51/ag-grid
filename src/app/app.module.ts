import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { SignInComponent } from './components/sign-in/sign-in.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JurorsDataComponent } from './components/jurors-data/jurors-data.component';
import { EventsComponent } from './components/events/events.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SummonJurorsComponent } from './components/summon-jurors/summon-jurors.component';
import { HomeComponent } from './components/home/home.component';
import { ViewEventComponent } from './components/events/view-event/view-event.component';
import { RegisterComponent } from './components/sign-in/register/register.component';
import { CreateEventComponent } from './components/events/create-event/create-event.component';

import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BlueComponentComponent } from './components/blue-component/blue-component.component';

import { Typeahead } from "ng2-typeahead";
import { TypeaheadEditorComponent } from './components/typeahead/typeahead-editor.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    NavbarComponent,
    JurorsDataComponent,
    EventsComponent,
    ProfileComponent,
    SummonJurorsComponent,
    ViewEventComponent,
    RegisterComponent,
    CreateEventComponent,
    BlueComponentComponent,
    Typeahead,
    TypeaheadEditorComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([BlueComponentComponent, TypeaheadEditorComponent])
  ],
  providers: [LoginService, DataService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
