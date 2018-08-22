import { Component, OnInit } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'tm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    email: '',
    message: ''
  }

  displayErrors(control: AbstractControl): boolean {
    return (control.dirty || control.touched) && control.invalid;
  }

  constructor() { }

  ngOnInit() {
  }

}
