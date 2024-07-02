import { Component, EventEmitter, Output } from '@angular/core';
import { OrdenCompra } from '../../../../models/orden-compra.model';
import { OrdenCompraService } from '../../../../services/orden-compra.service';
import { FormControl } from '@angular/forms';
import { GestionOrdenCompraComponent } from '../../gestion-orden-compra.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabla-orden-compra',
  templateUrl: './tabla-orden-compra.component.html',
  styleUrl: './tabla-orden-compra.component.scss'
})
export class TablaOrdenCompraComponent {

  private gestionOrdenCompraSub!: Subscription;

  @Output() onVisualizarOrdenCompra = new EventEmitter<{idOrdenCompra: number}>();

  ordenesCompra: OrdenCompra[] = [];
  
  paginaActual: number = 1;

  buscador: FormControl = new FormControl('');

  onPageChange(event: any) {
    this.paginaActual = event.first / event.rows + 1;
  }
  
  constructor(
    private _ordenCompraService: OrdenCompraService,
    private gestionOrdenCompraComponent: GestionOrdenCompraComponent
  ) { }

  ngOnInit() {
    this.listarOrdenesCompra();
    this.refreshList();
  }

  editarOrdenCompra(id: number){
    console.log('Editar orden de compra con id: ', id);
  }

  visualizarOrdenCompra(idOrdenCompra: number){
    this.onVisualizarOrdenCompra.emit({idOrdenCompra: idOrdenCompra});
  } 

  listarOrdenesCompra(){
    this._ordenCompraService.getOrdenesCompra().subscribe({
      next: (data : OrdenCompra[]) => {
        this.ordenesCompra = data;
      }
    });
  }

  refreshList() {
    if (this.gestionOrdenCompraComponent) {
      this.gestionOrdenCompraSub = this.gestionOrdenCompraComponent.gestionOrdenCompra.subscribe(() => {
        this.listarOrdenesCompra();
      });
    }
  }

}
