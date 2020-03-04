  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Plat } from '../Models/plat';
  import { URL } from 'src/environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class PlatsService {

    constructor(private httpClient: HttpClient) { }

    postPlat(plat: Plat): Observable<Plat> {
      return this.httpClient.post<Plat>(URL + '/Plats', plat).pipe();
    }
    getPlats(): Observable<Plat[]> {
      return this.httpClient.get<Plat[]>(URL + '/Plats').pipe();
    }

    getPlat(id: number): Observable<Plat> {
      return this.httpClient.get<Plat>(URL + '/Plats/' + id).pipe();
    }

    deletePlat(id: number) {
      return this.httpClient.delete(URL + '/Plats/' + id).pipe();
    }

    updatePlat(id: number, plat): Observable <Plat> {
      return this.httpClient.put<Plat>(URL + '/Plats/' + id, plat).pipe();
    }

  }
