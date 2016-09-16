import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ProgressBarModule } from 'angular2-progressbar';

@NgModule({
  imports: [BrowserModule, ProgressBarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
