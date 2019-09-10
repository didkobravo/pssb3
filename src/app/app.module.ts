import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OpportunitiesService } from './services/opportunities.service';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ClarityModule, 
    FormsModule,
    AppRoutingModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    OpportunitiesService
  ]
})
export class AppModule { }
