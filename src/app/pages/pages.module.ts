import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
  ],
  declarations: [ContactComponent]
})
export class PagesModule { }
