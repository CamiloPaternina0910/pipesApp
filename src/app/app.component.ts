import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string = "Camilo paternina"

  mostrarNombre(){
    console.log(this.nombre)
  }
}
