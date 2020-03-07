import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsPagePage } from './google-maps-page.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapsPagePageRoutingModule {}
