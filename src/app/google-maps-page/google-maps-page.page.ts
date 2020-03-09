import { Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';



@Component({
  selector: 'app-google-maps-page',
  templateUrl: './google-maps-page.page.html',
  styleUrls: ['./google-maps-page.page.scss'],
})
export class GoogleMapsPagePage implements  OnInit, OnDestroy {

   @ViewChild(GoogleMapsComponent, {static: false}) mapComponent: GoogleMapsComponent;

   
    constructor() {}



    ngOnInit() {
    }

    ngOnDestroy() {
      this.mapComponent = null;
    }
}
