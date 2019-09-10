import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { PickerComponent } from './picker/picker.component';

@NgModule({
  imports: [
    HomeRoutingModule
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