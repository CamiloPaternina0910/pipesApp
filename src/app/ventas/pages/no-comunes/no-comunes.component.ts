import { Component } from '@angular/core';
import { interval } from 'rxjs'
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre : string  = 'Camilo'
  genero : 'Femenino' | 'Masculino' = 'Masculino'
  persona = {
    nombre: 'Camilo',
    edad: 21,
    pais: 'Colombia'
  }
  clientes: string[] = [
    'Camilo',
    'Aury',
    'Yisel',
    'Sally'
  ]

  clientesMap = {
    '=1'  : '# cliente ',
    'other' : '# clientes'
  }
  invitacionMap = {
    'Femenino' : 'invitarla',
    'Masculino': 'invitarlo'
  }

  cambiarCliente(){
    this.nombre = 'Aury'
    this.genero = 'Femenino'
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  myObservableTimer = interval(200);

}
