import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RatingModule} from 'primeng/rating';
import {KeyFilterModule} from 'primeng/keyfilter';
import {   BookListComponent } from './book-list/book-list.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RatingModule,
    KeyFilterModule
  ],
  declarations: [ShowComponent, CreateComponent ,   BookListComponent]
})
export class BookModule { }
