import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';


@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ClarityModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
