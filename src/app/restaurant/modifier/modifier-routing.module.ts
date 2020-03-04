import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierPage } from './modifier.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPageRoutingModule {}
