import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionOrdenCompraRoutingModule } from './gestion-orden-compra-routing.module';
import { TablaOrdenCompraComponent } from './components/tabla-orden-compra/tabla-orden-compra.component';
import { GestionOrdenCompraComponent } from './gestion-orden-compra.component';
import { SharedModule } from '../shared/shared.module';
import { DialogOrdenCompraComponent } from './components/dialog-orden-compra/dialog-orden-compra.component';


@NgModule({
  declarations: [
    GestionOrdenCompraComponent,
    TablaOrdenCompraComponent,
    DialogOrdenCompraComponent
  ],
  imports: [
    CommonModule,
    GestionOrdenCompraRoutingModule,
    SharedModule
  ]
})
export class GestionOrdenCompraModule { }
