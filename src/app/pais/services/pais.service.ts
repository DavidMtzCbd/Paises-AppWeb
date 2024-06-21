import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get HttpParams(){
    return new HttpParams()
    .set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor(

    private http : HttpClient

  ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;

   return  this.http.get<Country[]>( url , { params : this.HttpParams } );

  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`

    return this.http.get<Country[]>( url , { params : this.HttpParams });
  }

  getPaisByID( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRergion( region : string ):Observable<Country[]>{


    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params : this.HttpParams } )
              .pipe(
                tap( console.log )
              )
  }



}
