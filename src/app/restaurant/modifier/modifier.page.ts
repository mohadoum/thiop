import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/Models/restaurant';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'resto-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  nomControl: FormControl;
  latitudeControl: FormControl;
  longitudeControl: FormControl;
  formGroup: FormGroup;
  restoId: number;
  resto: Restaurant;
  constructor(private builder: FormBuilder, private route: ActivatedRoute,
    private nav: NavController, private service: RestoService, private router: Router) {
    this.restoId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRestaurant(this.restoId).subscribe(resto => {
      this.resto = resto;
      this.nomControl = new FormControl(this.resto.nom, [Validators.required, Validators.minLength(2)]);
      this.latitudeControl = new FormControl(this.resto.latitude);
      this.longitudeControl = new FormControl(this.resto.longitude);
      this.formGroup = this.builder.group({
        nom: this.nomControl,
        latitude: this.latitudeControl,
        longitude: this.longitudeControl
      });
    });

  }

  modifier(): void {
    this.service.updateRestaurant(this.resto.id, this.formGroup.value).subscribe(plat => {
      this.nav.back();
    });
  }

  ngOnInit() {
  }

}
