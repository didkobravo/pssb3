import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ClarityModule, 
    FormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
