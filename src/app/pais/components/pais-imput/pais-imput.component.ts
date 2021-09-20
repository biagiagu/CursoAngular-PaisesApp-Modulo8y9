import { ThisReceiver } from '@angular/compiler';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styles: [
  ]
})
export class PaisImputComponent implements OnInit  {
  
  
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebunce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string='';
  
  debouncer : Subject<string> = new Subject();
  
  
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor =>{
        this.onDebunce.emit(valor);
      })
  }
  termino:string="";

  buscar(){
    this.onEnter.emit( this.termino );
  }
  
  teclaPresionada ( ){
    this.debouncer.next(this.termino);
  }
}
