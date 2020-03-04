import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatsService } from 'src/app/service/plats.service';
import { Plat } from 'src/app/Models/plat';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Restaurant } from 'src/app/Models/restaurant';
import { RestoService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'plats-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  restaurantControl: FormControl;
  nomControl: FormControl;
  prixControl: FormControl;
  descriptionControl: FormControl;
  formGroup: FormGroup;
  platId: number;
  plat: Plat;
  restos: Restaurant[];
  restoId: number;
  constructor(private builder: FormBuilder, private route: ActivatedRoute, public toastController: ToastController,
    private nav : NavController, private service: PlatsService, private router: Router, private restoService: RestoService) {

    this.platId = Number(this.route.snapshot.paramMap.get('id'));

    this.restoService.getRestaurants().subscribe(
      response => {this.restos = response; },
      error => {console.log('Echec de chargement des restaurants'); }
    );

    this.service.getPlat(this.platId).subscribe(plat => {
      this.plat = plat;

      if (this.plat.restaurant != null) {
        this.restoId = this.plat.restaurant.id;
      } else {
        this.restoId = -1;
      }

      this.restaurantControl = new FormControl(this.restoId, Validators.required);
      this.nomControl = new FormControl(this.plat.nom, [Validators.required, Validators.minLength(2)]);
      this.prixControl = new FormControl(this.plat.prix, Validators.required);
      this.descriptionControl = new FormControl(this.plat.description);
      this.formGroup = this.builder.group({
        restaurant: this.restaurantControl,
        nom: this.nomControl,
        prix: this.prixControl,
        description: this.descriptionControl
      });
    });

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

  modifier(): void {
    let idResto: number = this.formGroup.value.restaurant;
    let resto: Restaurant = new Restaurant();
    let i: Restaurant;
    for (i of this.restos) {
      if (i.id == idResto) {
        resto = this.jsonCopy(i);
      }
    }
    this.formGroup.value.restaurant = resto;
    this.service.updatePlat(this.plat.id, this.formGroup.value).subscribe(plat => {
      this.presentToast('Plat modifié avec succès.');
      this.nav.back();
    }
    , error => {console.log('Echec de modification du plat!'); });
  }

  ngOnInit() {
  }

  jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }


}
