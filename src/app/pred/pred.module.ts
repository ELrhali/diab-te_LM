import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredectComponent } from './componnent/predect/predect.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PredectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PredModule { }
