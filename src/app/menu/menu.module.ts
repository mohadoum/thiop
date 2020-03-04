import { IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuPage } from './menu.page';
import { ModalPage } from './modal/modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: MenuPage }]),
  ],
  entryComponents: [ModalPage],
  declarations: [MenuPage, ModalPage]
})
export class MenuPageModule {}
