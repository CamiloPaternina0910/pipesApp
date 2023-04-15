import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'productos-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUpperCase : boolean = false;
  heroes : Hero[] = [
    {
      name:'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name:'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name:'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ]
  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }

}
