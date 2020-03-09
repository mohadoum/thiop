import { Component, Input, Renderer2, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Plugins, Geolocation } from '@capacitor/core';
import { RestoService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/Models/restaurant';
import { ToastService } from '../service/toast.service';

/// <reference types=”@types/googlemaps” />
declare var google: any;

const { Network } = Plugins;

@Component({
  selector: 'google-map',
  templateUrl: 'google-maps.component.html'
})
export class GoogleMapsComponent implements OnInit {

    @Input('apiKey') apiKey: string;

    public map: any;
    public markers: any[] = [];
    private mapsLoaded: boolean = false;
    private networkHandler = null;
    private restos: Restaurant[] = [];
    constructor(private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document, private restoService: RestoService, private toastService: ToastService) {

    }
    addRestaurantMarker() {
        let resto: Restaurant;
        for (resto of this.restos) {
            this.addMarker(resto.latitude, resto.longitude, resto.nom);
        }
      }


    ngOnInit() {

        this.init().then((res) => {
            console.log("Google Maps ready.");
        }, (err) => {
            console.log(err);
        });

    }

    private init(): Promise<any> {

        return new Promise((resolve, reject) => {

            this.loadSDK().then((res) => {

                this.initMap().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });

            }, (err) => {

                reject(err);

            });

        });

    }

    private loadSDK(): Promise<any> {

        console.log("Loading Google Maps SDK");

        return new Promise((resolve, reject) => {

            if (!this.mapsLoaded) {

                Network.getStatus().then((status) => {

                    if (status.connected) {
                        this.injectSDK().then((res) => {
                            resolve(true);
                        }, (err) => {
                            reject(err);
                        });

                    } else {

                        if (this.networkHandler == null) {

                            this.networkHandler = Network.addListener('networkStatusChange', (status) => {

                                if(status.connected){

                                    this.networkHandler.remove();

                                    this.init().then((res) => {
                                        console.log("Google Maps ready.");
                                    }, (err) => {
                                        console.log(err);
                                    });

                                }

                            });

                        }

                        reject('Not online');
                    }

                }, (err) => {

                    // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
                    if (navigator.onLine) {

                        this.injectSDK().then((res) => {
                            resolve(true);
                        }, (err) => {
                            reject(err);
                        });

                    } else {
                        reject('Not online');
                    }

                });

            } else {
                reject('SDK already loaded');
            }

        });


    }

    private injectSDK(): Promise<any> {

        return new Promise((resolve, reject) => {

            window['mapInit'] = () => {
                this.mapsLoaded = true;
                resolve(true);
            };

            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';

            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            } else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
            }

            this.renderer.appendChild(this._document.body, script);

        });

    }

    private initMap(): Promise<any> {

        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition().then((position) => {

                console.log(position);

                let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };

                this.map = new google.maps.Map(this.element.nativeElement, mapOptions);
                this.setLocationMarker(position.coords.latitude, position.coords.longitude, '../../assets/icon/position.png', 'Vous!');

                this.restoService.getRestaurants().subscribe(
                    response => {
                                  this.restos = response;
                                  this.addRestaurantMarker();
                                  this.toastService.presentToast('Représentation des restaurants effectuée avec succes.');
                                } ,
                    error => { this.toastService.presentToast('Echec de la Représentation des restaurants', 'danger'); }
                );

                resolve(true);

            }, (err) => {

                reject('Could not initialise map');

            });

        });

    }

    public addMarker(lat: number, lng: number, title: string): void {

        let latLng = new google.maps.LatLng(lat, lng);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: latLng,
            label: {
                color: 'blue',
                fontWeight: 'bold',
                text: '   ' + title,
              }
        });

        this.markers.push(marker);
    }


    public setLocationMarker(lat: number, lng: number, icon: string, title: string): void {

        let latLng = new google.maps.LatLng(lat, lng);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: latLng,
            icon: icon,
            label: {
                color: 'blue',
                fontWeight: 'bold',
                text: '   ' + title,
              }
        });
        this.markers.push(marker);
    }

}
