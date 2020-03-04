  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Restaurant } from '../Models/restaurant';
  import { URL } from 'src/environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class RestoService {

    constructor(private httpClient: HttpClient) { }

    postRestaurant(resto: Restaurant): Observable<Restaurant> {
      return this.httpClient.post<Restaurant>(URL + '/Restaurants', resto).pipe();
    }
    getRestaurants(): Observable<Restaurant[]> {
      return this.httpClient.get<Restaurant[]>(URL + '/Restaurants').pipe();
    }

    getRestaurant(id: number): Observable<Restaurant> {
      return this.httpClient.get<Restaurant>(URL + '/Restaurants/' + id).pipe();
    }

    deleteRestaurant(id: number) {
      return this.httpClient.delete(URL + '/Restaurants/' + id).pipe();
    }

    updateRestaurant(id: number, resto): Observable <Restaurant> {
      return this.httpClient.put<Restaurant>(URL + '/Restaurants/' + id, resto).pipe();
    }

  }
