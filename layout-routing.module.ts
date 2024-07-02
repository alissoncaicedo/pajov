import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'arl',
        loadChildren: () => 
        import('../arl/arl.module').then((m) => m.ArlModule),
      },
      {
        path: 'eps',
        loadChildren: () => 
        import('../eps/eps.module').then((m) => m.EpsModule),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('../gestion-cliente/gestion-cliente.module').then(
            (m) => m.GestionClienteModule
          ),
      },
      {
        path: 'proveedor',
        loadChildren: () =>
          import('../gestion-proveedor/gestion-proveedor.module').then(
            (m) => m.GestionProveedorModule
          ),
      },
      {
        path: 'contrato',
        loadChildren: () =>
          import('../gestion-contrato/gestion-contrato.module').then(
            (m) => m.GestionContratoModule
          ),
      },
      {
        path: 'orden-compra',
        loadChildren: () =>
          import('../gestion-orden-compra/gestion-orden-compra.module').then(
            (m) => m.GestionOrdenCompraModule
          ),
      },
      {
        path: 'remision',
        loadChildren: () =>
          import('../remision/remision.module').then(
            (m) => m.RemisionModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
