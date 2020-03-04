  import { Injectable } from '@angular/core';

  import { ToastController } from '@ionic/angular';

  @Injectable({
    providedIn: 'root'
  })
  export class ToastService {

    constructor(private toastController: ToastController) { }

    async presentToast(message: string, color: string = 'success') {
      const toast = await this.toastController.create({
        message: message,
        duration: 4000,
        color: color,
        position: 'top'
      });
      toast.present();
    }


  }
