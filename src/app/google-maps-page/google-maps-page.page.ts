import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { RestoService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/Models/restaurant';
import { ToastService } from '../service/toast.service';


@Component({
  selector: 'app-google-maps-page',
  templateUrl: './google-maps-page.page.html',
  styleUrls: ['./google-maps-page.page.scss'],
})
export class GoogleMapsPagePage implements AfterViewInit, OnDestroy {

   @ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

   restos: Restaurant[] = [];
    constructor(private restoService: RestoService, private toastService: ToastService) {}

    addRestaurantMarker() {
      let resto: Restaurant;
      for (resto of this.restos) {
          this.mapComponent.addMarker(resto.latitude, resto.longitude, resto.nom);

      }
    }



    ngAfterViewInit() {

      this.restoService.getRestaurants().subscribe(
        response => {
                      this.restos = response;
                      this.addRestaurantMarker();
                      this.toastService.presentToast('Représentation des restaurants effectuée avec succes.');
                    } ,
        error => { this.toastService.presentToast('Echec de la Représentation des restaurants', 'danger'); }
      );
    }

    ngOnDestroy() {
      this.mapComponent = null;
    }
}
