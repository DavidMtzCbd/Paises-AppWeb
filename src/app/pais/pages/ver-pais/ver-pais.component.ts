import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;

  constructor( private activatedRoute : ActivatedRoute,
              private paisService : PaisService,
   ){

  }



  ngOnInit(): void {

    //PRIMERA FORMA PARA OBTENER EL ID Y SU INFORMACIÓN

    // this.activatedRoute.params.subscribe(
    //   ({ id }) => {
    //     console.log('Country: ', id );

    //     this.paisService.getPaisByID( id )
    //     .subscribe( pais => {
    //       console.log(pais);
    //     });

    //   }
    // )

    // SEGUNDA FORMA USANDO RxJs

    this.activatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.paisService.getPaisByID( id ) ),
      tap( console.log ) //recibe el producto del observable y lo imprime en consola
    )
    .subscribe( pais => this.pais = pais );

  }



}
