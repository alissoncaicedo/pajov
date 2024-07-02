import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArlComponent } from './components/listar-arl/listar-arl.component';
import { ArlComponent } from './arl.component';

const routes: Routes = [
{
  path:'',
  component: ArlComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArlRoutingModule { }
