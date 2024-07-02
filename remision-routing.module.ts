import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemisionComponent } from './remision.component';

const routes: Routes = [

  {
    path:'',
    component: RemisionComponent
  
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemisionRoutingModule { 
  
   
}
