import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';//Lo que se ingresa en el input
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(

    private paisService: PaisService

  ){}

  buscar(termino: string){
    this.hayError = false; //detecta que no hay ningún error antes de pasar a la función
    this.termino = termino

    this.paisService.buscarCapital( this.termino )
    .subscribe( paises => { //Aqui sería el next
      console.log(paises);
      this.paises = paises;

    }, (err) => { //El error
      this.hayError = true; //detecta que hay algún error
      this.paises = [] //vacio
    });


  }

}
