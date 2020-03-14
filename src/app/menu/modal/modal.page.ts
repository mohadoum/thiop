import { Component, OnInit } from '@angular/core';

import { Plat } from 'src/app/Models/plat';
import { Menu } from 'src/app/Models/menu';

import { ModalController, NavParams } from '@ionic/angular';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MenuService } from 'src/app/service/menu.service';
import { ToastService } from 'src/app/service/toast.service';


@Component({
  selector: 'modal-tab1',
  templateUrl: 'modal.page.html',
  styleUrls: ['modal.page.scss']
})
export class ModalPage implements OnInit {

  plats: Plat[];
  menu: Menu;
  menuPlatIds: string[] = [];

  platsControl: FormControl;
  formGroup: FormGroup;
  customAlertOptions: any;

  constructor(private modalCtrl: ModalController, private builder: FormBuilder, private navParams: NavParams,
    private menuService: MenuService, private toastService: ToastService) {

    this.customAlertOptions = {
      header: 'Plats',
      translucent: true,
      cssClass: 'my-alert-size'
    };

    this.plats = navParams.get('plats');
    this.menu = navParams.get('menu');
    if (this.plats != null) {
      let plat: Plat;
      let menuPlats: Plat[] = [];
      if (this.menu != null) {
        menuPlats = this.menu.plats;
      }

      for (plat of menuPlats) {
        this.menuPlatIds.push(plat.id.toString());
      }

      this.platsControl = new FormControl(this.menuPlatIds, Validators.required);
      this.formGroup = this.builder.group({
        plats: this.platsControl
      });

    } else {
      window.alert('Aucun plat n\'a été reçu dans le modal! Veuillez contacter votre administrateur!');
    }

  }

  ngOnInit() {}

  dismiss() {
    if (this.plats != null ) {
      this.setRestaurantInMenuPlats();
    }
    this.modalCtrl.dismiss({
      menu: this.menu
    });
  }

  setRestaurantInMenuPlats() {
    let plat: Plat;
    let menuPlat: Plat;
    let menuPlats: Plat[] = [];
    if (this.menu != null) {
      for (menuPlat of this.menu.plats) {
        for (plat of this.plats) {
          if (plat.id === menuPlat.id) {
            menuPlats.push(plat);
          }
        }
      }
      this.menu.plats = menuPlats;
    }
  }

  definirMenu() {
    let selectedPlatIds: string[];
    let id: string;
    let selectedPlats: Plat[] = [];
    let item: Plat;
    let menu: Menu;
    selectedPlatIds = this.formGroup.value.plats;
    for (id of selectedPlatIds) {
      for (item of this.plats) {
        if (item.id.toString() === id) {
          selectedPlats.push(item);
        }
      }
    }

    menu = new Menu();
    if (this.menu != null) {
      menu.id = this.menu.id;
    }
    menu.plats = selectedPlats;

    if (this.menu == null) {
      this.menuService.postMenu(menu).subscribe(
        response => {this.toastService.presentToast('Le menu a été défini avec succés!');
                     this.menu = response;
                     this.dismiss(); }
        , error => {this.toastService.presentToast('Oups! La définition du menu a échoué!', 'danger'); this.dismiss(); }
      );
    } else {
      this.menuService.updateMenu(this.menu.id, menu).subscribe(
        response => {this.toastService.presentToast('Le menu a été défini avec succés!');
                     this.menu = response;
                     this.dismiss(); }
        , error => {this.toastService.presentToast('Oups! La définition du menu a échoué!', 'danger'); this.dismiss(); }
      );
    }

  }

}
