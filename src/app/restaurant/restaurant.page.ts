import { Component } from '@angular/core';
import { Restaurant } from '../Models/restaurant';
import { RestoService } from 'src/app/service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {

  restos: Restaurant [];

  constructor(private route: Router, private api: RestoService) {
  }

  ionViewWillEnter() {
    this.getRestaurants();
  }

  modifierRestaurant(id: any): void {
    this.route.navigate(['tabs/restaurant/modifier', id]);
  }

  getRestaurants(): void {
    this.api.getRestaurants().subscribe(Response => {
      this.restos = Response;
    });
  }
  delete(resto: Restaurant): void {
    this.api.deleteRestaurant(resto.id).subscribe(plat => {
      this.getRestaurants();
    });
  }

}
