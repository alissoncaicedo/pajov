import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArlComponent } from './arl.component';
import { ListarArlComponent } from './components/listar-arl/listar-arl.component';
import { SharedModule } from '../shared/shared.module';
import { ArlRoutingModule } from './arl-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    ArlComponent,
    ListarArlComponent
  ],
  imports: [
    CommonModule,
    ArlRoutingModule,
    SharedModule,
    CheckboxModule,
    ConfirmDialogModule

  ]
})
export class ArlModule { }
