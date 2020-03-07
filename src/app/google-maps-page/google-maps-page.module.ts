import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleMapsPagePageRoutingModule } from './google-maps-page-routing.module';

import { GoogleMapsPagePage } from './google-maps-page.page';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';

/* import { AgmCoreModule } from '@agm/core';*/


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsPagePageRoutingModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6jTl2jABkMFTqQjpCF75sGMlY6yhdXF0',
      libraries: ['places']
      }),*/
  ],
  declarations: [GoogleMapsPagePage, GoogleMapsComponent]
})
export class GoogleMapsPagePageModule {
    constructor() {

    }
}
