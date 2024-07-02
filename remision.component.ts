import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Remision, guardarRemision } from '../../core/models/remision.model';
import { RemisionService } from './services/remision.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cliente } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { OrdenCompra } from '../../models/orden-compra.model';
import { OrdenCompraService } from '../../services/orden-compra.service';

@Component({
  selector: 'app-remision',
  templateUrl: './remision.component.html',
  styleUrl: './remision.component.scss'
})
export class RemisionComponent {
displayModalForm: boolean = false;
  formulario: FormGroup;
  tituloPrincipal: string = "REMISIÓN"
  tituloModal: string = "CREAR REMISIÓN";
  listarRemision: Remision[] = [];
  // remisionCopia: Remision[] = [];
  idRemisionEntrante: number = 0;
  
  remisionById: Remision | null = null;
  displayModalView: boolean = false;
  
  clientes: Cliente[] = [];
  clienteDetalle: Cliente | null = null;
 
  ordenCompras: OrdenCompra[] = [];
  ordenCompraDetalle: OrdenCompra | null = null;

  constructor(
    private _remiSvc: RemisionService,
    private _clienteService: ClientesService,
    private _ordenCompraService: OrdenCompraService,
    private _msgSvc: MessageService,
    private _confirmationSvc: ConfirmationService,
    private form: FormBuilder
  ) {
    this.formulario = this.form.group({
      idCliente: ['', Validators.required],
      idOrdenCompra: ['', Validators.required],
      fechaRemision: ['', Validators.required],
      cantidadRemision:['', Validators.required],
      categoriaRemision: ['', Validators.required],

      remisionDetalle: this.form.array([])

    });

    
  }

  ngOnInit(){
    this.consultarClientes()
    this.consultarOrdenCompra()
  }

  get detalles(): FormArray {
    return this.formulario.get('remisionDetalle') as FormArray;
  }

  obtenerPorId(idRemision: number) {
    this._remiSvc.getRemisionById(idRemision).subscribe({
      next: (data: Remision) => {
        console.log(data)
        this.remisionById = data;
        
      }
    });
    this.displayModalView = true;
  }

  openModal() {
    this.displayModalForm = true;
  }

  closedModal() {
    this.displayModalForm = false;
    this.formulario.reset();
    this.tituloModal = "CREAR REMISIÓN";

    const detallesArray = this.formulario.get('remisionDetalle') as FormArray;
    detallesArray.clear();
  }

  addDetalle() {
    const detalleRemi = this.form.group({
      referenciaRemisionDetalle: ['', Validators.required],
      descripcionRemisionDetalle: ['', Validators.required],
      tallaRemisionDetalle: ['', Validators.required],
    });
    this.detalles.push(detalleRemi);
  }

  removeDetalle(index: number) {
    this.detalles.removeAt(index);
  }


  onSubmit() {
    if (this.formulario.valid) {
      const remision: guardarRemision = this.formulario.value;
      console.log(remision)
      this._remiSvc.crearRemision(remision).subscribe({
        next: (data: guardarRemision) => {
          this.showToastMsg('info', 'Información', 'Orden de compra generada correctamente');
          this.closedModal();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        error: (error: any) => {
          const errorResponse = error.error.mensaje;
          this.showToastMsg('warn', 'Error', `Error al generar orden de compra: ${errorResponse}`);
        }
      });
    }
  }

  get idCliente() {
    return this.formulario.controls['idCliente'];
  }

  get idOrdenCompra() {
    return this.formulario.controls['idOrdenCompra'];
  }

  consultarClientes() {
    this._clienteService.listarClientes().subscribe({
      next: (data: Cliente[]) => {
        this.clientes = data;
      }
    });
  }

  consultarClienteDetalle(idCliente: number) {
    if(idCliente != null){
    this._clienteService.getClienteById(idCliente).subscribe({
      next: (data: Cliente) => {
        this.clienteDetalle = data;
      }
    });
    }else{
      this.clienteDetalle = null;
    }
  }

  consultarOrdenCompra() {
    this._ordenCompraService.getOrdenesCompra().subscribe({
      next: (data: OrdenCompra[]) => {
        this.ordenCompras = data;
      }
    });
  }

  consultarOrdenCompraDetalle(idOrdenCompra: number) {
    if(idOrdenCompra != null){
    this._ordenCompraService.getOrdenCompraById(idOrdenCompra).subscribe({
      next: (data: OrdenCompra) => {
        this.ordenCompraDetalle = data;
      }
    });
    }else{
      this.ordenCompraDetalle = null;
    }
  }

  showToastMsg(severity: string, summary: string, detail: string) {
    this._msgSvc.add({ severity: severity, summary: summary, detail: detail });
  }
  
}


