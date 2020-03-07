import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'plats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plats/plats.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () =>
              import('../plats/ajouter/ajouter.module').then(m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () =>
              import('../plats/modifier/modifier.module').then(m => m.ModifierPageModule)
          }
        ]
      },
      {
        path: 'restaurant',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../restaurant/restaurant.module').then(m => m.RestaurantPageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () =>
              import('../restaurant/ajouter/ajouter.module').then(m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () =>
              import('../restaurant/modifier/modifier.module').then(m => m.ModifierPageModule)
          },
          {
            path: 'maps',
            loadChildren: () =>
              import('../google-maps-page/google-maps-page.module').then(m => m.GoogleMapsPagePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
