import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {
    // RUTA PRINCIPAL
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    // HACEMOS DINAMICO EL PATH
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    // PATH POR SI NO SE SELECCIONA NINGUN PATH DE ARRIBA
    path: '**',
    redirectTo: '' //REDIRECCIONA AL HOME
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot( routes )
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}
