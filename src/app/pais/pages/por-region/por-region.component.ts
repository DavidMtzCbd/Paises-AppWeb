import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right : 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania' ]
  regionActiva : string = '';
  paises : Country[] = []

  constructor(
      private paisService : PaisService,
  ){}

  getClaseCSS( region : string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region : string ){

    if ( region === this.regionActiva ) { return; }//Esto es para evitar que haga refresh si seleccionamos la misma region otra vez

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRergion( region )
    .subscribe( paises => this.paises = paises);
  }
}
