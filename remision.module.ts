import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemisionRoutingModule } from './remision-routing.module';
import { RemisionComponent } from './remision.component';
import { SharedModule } from '../shared/shared.module';
import { TablaRemisionComponent } from './Components/tabla-remision/tabla-remision.component';
import { DialogRemisionDetalleComponent } from './Components/dialog-remision-detalle/dialog-remision-detalle.component';



@NgModule({
  declarations: [
    RemisionComponent,
    TablaRemisionComponent,
    DialogRemisionDetalleComponent,

  ],
  imports: [
    CommonModule,
    RemisionRoutingModule,
    SharedModule
  ]
})
export class RemisionModule { }
