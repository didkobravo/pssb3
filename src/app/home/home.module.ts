import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { PickerComponent } from './picker/picker.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    HomeRoutingModule,
    BrowserModule,
    CommonModule,
    ClarityModule
  ],
  declarations: [
    HomeComponent,
    NavTilesComponent,
    PickerComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}