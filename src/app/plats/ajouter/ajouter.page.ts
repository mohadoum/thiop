import { Component, OnInit } from '@angular/core';
import { Plat } from '../../Models/plat';
import { PlatsService } from 'src/app/service/plats.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestoService } from 'src/app/service/restaurant.service';
import {Restaurant} from 'src/app/Models/restaurant';

@Component({
  selector: 'plat-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  restaurantControl: FormControl;
  nomControl: FormControl;
  prixControl: FormControl;
  descriptionControl: FormControl;
  formGroup: FormGroup;

  plat: Plat;
  restos: Restaurant[];

  constructor(private service: PlatsService, public toastController: ToastController,
    private route: Router, private builder: FormBuilder, private restoService: RestoService) {
    this.plat = new Plat();

    this.restoService.getRestaurants().subscribe(
      response => {this.restos = response; },
      error => {console.log('Echec de chargement des restaurants'); }
    );

    this.restaurantControl = new FormControl(null, [Validators.required]);
    this.nomControl = new FormControl(this.plat.nom, [Validators.required, Validators.minLength(2)]);
    this.prixControl = new FormControl(this.plat.prix, Validators.required);
    this.descriptionControl = new FormControl(this.plat.description);
    this.formGroup = this.builder.group({
        restaurant: this.restaurantControl,
        nom: this.nomControl,
        prix: this.prixControl,
        description: this.descriptionControl
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

  ajouterPlat(): void {
    let idResto: number = this.formGroup.value.restaurant;
    let resto: Restaurant = new Restaurant();
    let i: Restaurant;
    for (i of this.restos) {
      if (i.id == idResto) {
        resto = this.jsonCopy(i);
      }
    }

    this.formGroup.value.restaurant = resto;
    this.service.postPlat(this.formGroup.value).subscribe(plat => {
      this.presentToast('Plat ajouté avec succès.');
      this.route.navigate(['/tabs/plats']);
    }, error => {});
  }

  jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }



}
