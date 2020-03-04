import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../Models/menu';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  postMenu(menu: Menu): Observable<Menu> {
    return this.httpClient.post<Menu>(URL + '/Menus', menu).pipe();
  }

  getMenus(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(URL + '/Menus').pipe();
  }

  getMenu(id: number): Observable<Menu> {
    return this.httpClient.get<Menu>(URL + '/Menus/' + id).pipe();
  }

  updateMenu(id: number, menu): Observable <Menu> {
    return this.httpClient.put<Menu>(URL + '/Menus/' + id, menu).pipe();
  }

}

