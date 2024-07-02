import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenCompra, guardarOrdenCompra } from '../../models/orden-compra.model';
import { OrdenCompraService } from '../../services/orden-compra.service';
import { ClientesService } from '../../services/clientes.service';
import { ProveedorService } from '../../services/proveedor.service';
import { Cliente } from '../../models/cliente.model';
import { Proveedor } from '../../models/proveedor.model';
import { MessageService } from 'primeng/api';
import { DialogOrdenCompraComponent } from './components/dialog-orden-compra/dialog-orden-compra.component';

@Component({
  selector: 'app-gestion-orden-compra',
  templateUrl: './gestion-orden-compra.component.html',
  styleUrl: './gestion-orden-compra.component.scss'
})
export class GestionOrdenCompraComponent {

  @Output() gestionOrdenCompra = new EventEmitter<void>();

  ordenCompraById: OrdenCompra | null = null;
  displayModalView: boolean = false;

  obtenerIdOrdenCompra(idOrdenCompra: number) {
    this._ordenCompraService.getOrdenCompraById(idOrdenCompra).subscribe({
      next: (data: OrdenCompra) => {
        this.ordenCompraById = data;
      }
    });
    this.displayModalView = true;
  }

  ordenCompraForm: FormGroup;
  displayModalForm: boolean = false;
  tituloPrincipal: string = 'GESTIÓN DE ORDENES DE COMPRA';
  tituloModal: string = "GENERAR ORDEN DE COMPRA";

  clientes: Cliente[] = [];
  clienteDetalle: Cliente | null = null;

  proveedores: Proveedor[] = [];
  proveedorDetalle: Proveedor | null = null;

  codigoMoneda: { label: string, value: string }[] = [
    { label: 'USD', value: 'USD' },
    { label: 'COP', value: 'COP' },
    { label: 'EUR', value: 'EUR' }
  ];
    
  metodoPago: { label: string, value: string }[] = [
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Crédito', value: 'Crédito' }
  ];

  constructor(
    private form: FormBuilder,
    private _ordenCompraService: OrdenCompraService,
    private _clienteService: ClientesService,
    private _proveedorService: ProveedorService,
    private _msgSvc: MessageService,

  ) {
    this.ordenCompraForm = this.form.group({
      fechaElaboracion: ['', Validators.required],
      grupoCompra: ['', Validators.required],
      observacion: [''],
      idCliente: ['', Validators.required],
      idProveedor: ['', Validators.required],
      valorTotal: ['', Validators.required],
      cantidadTotal: ['', Validators.required],
      entregaEjecucionDetalle: this.form.group({
        direccion: ['', Validators.required],
        telefono: [''],
        contacto: [''],
        email: [''],
        pais: ['', Validators.required],
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
        orden: ['', Validators.required]
      }),

      metodoPago: ['', Validators.required],
      codigoMoneda: ['', Validators.required],

      ordenCompraDetalle: this.form.array([])

    });
  }

  get detalles(): FormArray {
    return this.ordenCompraForm.get('ordenCompraDetalle') as FormArray;
  }

  ngOnInit() {
    this.consultarClientes();
    this.consultarProveedores();

    this.detalles.valueChanges.subscribe(() => {
      this.calcularTotales();
    });
  }

  addDetalle() {
    const detalleForm = this.form.group({
      item: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      direccion: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidadMedidad: ['', Validators.required],
      precio: ['', Validators.required],
      subtotal: ['', Validators.required]
    });

    const cantidadControl = detalleForm.get('cantidad');
    const precioControl = detalleForm.get('precio');
    
    if (cantidadControl && precioControl) {
      cantidadControl.valueChanges.subscribe(() => this.calcularSubtotal());
      precioControl.valueChanges.subscribe(() => this.calcularSubtotal());
    }
    this.detalles.push(detalleForm);

  }

  calcularSubtotal() {
    this.detalles.controls.forEach(detalle => {
      const cantidadControl = detalle.get('cantidad');
      const precioControl = detalle.get('precio');
      const subtotalControl = detalle.get('subtotal');

      if (cantidadControl && precioControl && subtotalControl) {
        const cantidad = cantidadControl.value || 0;
        const precio = precioControl.value || 0;
        const subtotal = cantidad * precio;
        if (subtotal === 0) {
          subtotalControl.setValue('');
        } else {
          subtotalControl.setValue(subtotal);
        }      
      }
    });
  }

  calcularTotales() {
    let cantidadTotal = 0;
    let valorTotal = 0;
  
    // Verificar si hay detalles en el array
    if (this.detalles.length > 0) {
      this.detalles.controls.forEach(detalle => {
        const cantidadControl = detalle.get('cantidad');
        const subtotalControl = detalle.get('subtotal');
  
        if (cantidadControl && subtotalControl) {
          const cantidad = cantidadControl.value || 0;
          const subtotal = subtotalControl.value || 0;
  
          cantidadTotal += cantidad;
          valorTotal += subtotal;
        }
      });
    }
  
    const cantidadTotalControl = this.ordenCompraForm.get('cantidadTotal');
    const valorTotalControl = this.ordenCompraForm.get('valorTotal');
    
    if (cantidadTotalControl && valorTotalControl) {
      cantidadTotalControl.setValue(this.detalles.length > 0 ? cantidadTotal : '');
      valorTotalControl.setValue(this.detalles.length > 0 ? valorTotal : '');
    }
  }
  

  removeDetalle(index: number) {
    this.detalles.removeAt(index);
  }

  get idCliente() {
    return this.ordenCompraForm.controls['idCliente'];
  }

  get idProveedor() {
    return this.ordenCompraForm.controls['idProveedor'];
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

  consultarProveedores() {
    this._proveedorService.listarProveedores().subscribe({
      next: (data: Proveedor[]) => {
        this.proveedores = data;
      }
    });
  }

  consultarProveedorDetalle(idProveedor: number) {
    if(idProveedor != null){
    this._proveedorService.getProveedorById(idProveedor).subscribe({
      next: (data: Proveedor) => {
        this.proveedorDetalle = data;
      }
    });
    }else{
      this.proveedorDetalle = null;
    }
  }

  onSubmit() {
    if (this.ordenCompraForm.valid) {
      const ordenCompra: guardarOrdenCompra = this.ordenCompraForm.value;
      this._ordenCompraService.postOrdenCompra(ordenCompra).subscribe({
        next: (data: guardarOrdenCompra) => {
          this.showToastMsg('info', 'Información', 'Orden de compra generada correctamente');
          this.closedModal();
        },
        error: (error: any) => {
          const errorResponse = error.error.mensaje;
          this.showToastMsg('warn', 'Error', `Error al generar orden de compra: ${errorResponse}`);
        }
      });
    }
  } 

  generarOrdenCompra(ordenCompraForm: guardarOrdenCompra) {
    this._ordenCompraService.postOrdenCompra(ordenCompraForm).subscribe({
      next: (data: guardarOrdenCompra) => {
        console.log('Orden de Compra Generada:', data);
        this.closedModal();
      },
      error: (error) => {
        console.error('Error al generar orden de Compra:', error);
      
      }
    });
  }

  openModal() {
    this.displayModalForm = true;
  }

  closedModal() {
    this.displayModalForm = false;
    this.ordenCompraForm.reset();
    this.clienteDetalle = null;
    this.proveedorDetalle = null;

    const detallesArray = this.ordenCompraForm.get('ordenCompraDetalle') as FormArray;
    detallesArray.clear();
  }

  showToastMsg(severity: string, summary: string, detail: string) {
    this._msgSvc.add({ severity: severity, summary: summary, detail: detail });
  }


}
