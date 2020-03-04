import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../Models/restaurant';
import { RestoService } from 'src/app/service/restaurant.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'resto-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  nomControl: FormControl;
  latitudeControl: FormControl;
  longitudeControl: FormControl;
  formGroup: FormGroup;
  resto: Restaurant;

  constructor(private service: RestoService, public toastController: ToastController,
    private route: Router, private builder: FormBuilder) {
    this.resto = new Restaurant();

    this.nomControl = new FormControl(this.resto.nom, [Validators.required, Validators.minLength(2)]);
    this.latitudeControl = new FormControl(this.resto.latitude);
    this.longitudeControl = new FormControl(this.resto.longitude);
    this.formGroup = this.builder.group({
        nom: this.nomControl,
        latitude: this.latitudeControl,
        longitude: this.longitudeControl
      });
    }

  ngOnInit() {
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  ajouterResto(): void {
    this.service.postRestaurant(this.formGroup.value).subscribe(resto => {
      this.presentToast('restaurant ajouté avec succès.');
      this.route.navigate(['/tabs/restaurant']);
    }, error => {} );
  }

}
