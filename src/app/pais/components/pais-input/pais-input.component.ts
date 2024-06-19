import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //es un evento emisor
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //se emite cuando la persona deja de escribir

  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer.
    pipe( debounceTime(300)) //milesimas de segundo antes de emitir un valor
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit( this.termino )
  };

  teclaPresionada( ){
    this.debouncer.next(this.termino);
  }

}
