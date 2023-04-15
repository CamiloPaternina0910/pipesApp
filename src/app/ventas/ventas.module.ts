import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';
import { canFlyPipe } from './pages/pipes/can-fly.pipe';
import { SortByPipe } from './pages/pipes/sort-by.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrderComponent,
    ToggleCasePipe,
    canFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent
  ]
})
export class VentasModule { }
