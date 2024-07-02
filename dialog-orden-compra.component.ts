import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrdenCompra } from '../../../../models/orden-compra.model';
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { TDocumentDefinitions } from 'pdfmake/interfaces';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

type Estilo = {
  fontSize?: number;
  bold?: boolean;
  margin?: [number, number, number, number] | [number, number];
  color?: string;
};

type DiccionarioEstilos = {
  [clave: string]: Estilo;
};

@Component({
  selector: 'app-dialog-orden-compra',
  templateUrl: './dialog-orden-compra.component.html',
  styleUrl: './dialog-orden-compra.component.scss'
})
export class DialogOrdenCompraComponent {

  @Output() closeModal = new EventEmitter<void>();
  @Input() displayModalView: boolean = false;
  @Input() ordenCompra: OrdenCompra | null = null;


  tituloModal: string = "ORDEN DE COMPRA";

  constructor() { }

  ngOnInit(): void {

  }

  closedModal() {
    this.displayModalView = false;
    this.closeModal.emit();
  }

  generatePdf() {

    const pdfDefinition: any = {
      content: [
        { text: 'ORDEN DE COMPRA', style: 'header' },
        { text: `Número OC: ${this.ordenCompra?.idOrdenCompra}`, style: 'subheader' },
        { text: `Fecha elaboración: ${this.ordenCompra?.fechaElaboracion ? new Date(this.ordenCompra.fechaElaboracion).toLocaleDateString() : 'N/A'}`, style: 'subheader' },
        { text: `Grupo compras: ${this.ordenCompra?.grupoCompra}`, style: 'subheader' },
        { text: `Observaciones: ${this.ordenCompra?.observacion}`, style: 'subheader' },
        { text: 'INFORMACIÓN COMPRADOR', style: 'header' },
        { text: `Empresa: ${this.ordenCompra?.cliente.nombreCliente}`, style: 'subheader' },
        { text: `NIT: ${this.ordenCompra?.cliente.nitCliente}`, style: 'subheader' },
        { text: `Dirección: ${this.ordenCompra?.cliente.direccionCliente}`, style: 'subheader' },
        { text: `Teléfono: ${this.ordenCompra?.cliente.telefonoCliente}`, style: 'subheader' },
        { text: `Contacto: ${this.ordenCompra?.cliente.contactoCliente}`, style: 'subheader' },
        { text: `Email: ${this.ordenCompra?.cliente.emailCliente}`, style: 'subheader' },
        { text: `Ciudad: ${this.ordenCompra?.cliente.ciudadCliente}`, style: 'subheader' },
        { text: `Departamento: ${this.ordenCompra?.cliente.departamentoCliente}`, style: 'subheader' },
        { text: `País: ${this.ordenCompra?.cliente.paisCliente}`, style: 'subheader' },
        { text: 'INFORMACIÓN PROVEEDOR', style: 'header' },
        { text: `Empresa: ${this.ordenCompra?.proveedor.nombreProveedor}`, style: 'subheader' },
        { text: `NIT: ${this.ordenCompra?.proveedor.nitProveedor}`, style: 'subheader' },
        { text: `Dirección: ${this.ordenCompra?.proveedor.direccionProveedor}`, style: 'subheader' },
        { text: `Teléfono: ${this.ordenCompra?.proveedor.telefonoProveedor}`, style: 'subheader' },
        { text: `Contacto: ${this.ordenCompra?.proveedor.contactoProveedor}`, style: 'subheader' },
        { text: `Email: ${this.ordenCompra?.proveedor.emailProveedor}`, style: 'subheader' },
        { text: `Ciudad: ${this.ordenCompra?.proveedor.ciudadProveedor}`, style: 'subheader' },
        { text: `Departamento: ${this.ordenCompra?.proveedor.departamentoProveedor}`, style: 'subheader' },
        { text: `País: ${this.ordenCompra?.proveedor.paisProveedor}`, style: 'subheader' },
        { text: 'CONDICIONES DE NEGOCIACIÓN', style: 'header' },
        { text: `Moneda: ${this.ordenCompra?.codigoMoneda}`, style: 'subheader' },
        { text: `Pago: ${this.ordenCompra?.metodoPago}`, style: 'subheader' },
        { text: 'INFORMACIÓN ENTREGA/EJECUCIÓN', style: 'header' },
        { text: `Dirección: ${this.ordenCompra?.entregaEjecucionDetalle.direccion}`, style: 'subheader' },
        { text: `Teléfono: ${this.ordenCompra?.entregaEjecucionDetalle.telefono}`, style: 'subheader' },
        { text: `Contacto: ${this.ordenCompra?.entregaEjecucionDetalle.contacto}`, style: 'subheader' },
        { text: `Email: ${this.ordenCompra?.entregaEjecucionDetalle.email}`, style: 'subheader' },
        { text: `País: ${this.ordenCompra?.entregaEjecucionDetalle.pais}`, style: 'subheader' },
        { text: `Departamento: ${this.ordenCompra?.entregaEjecucionDetalle.departamento}`, style: 'subheader' },
        { text: `Ciudad: ${this.ordenCompra?.entregaEjecucionDetalle.ciudad}`, style: 'subheader' },
        { text: `Orden: ${this.ordenCompra?.entregaEjecucionDetalle.orden}`, style: 'subheader' },
      ],
    }

    // const pdf = pdfMake.createPdf(pdfDefinition);
  //   pdf.download('orden_compra.pdf');

  //   console.log(this.ordenCompra)
  //   // if (this.ordenCompra) {
  //   //   const documentDefinition = this.getDocumentDefinition();
  //   //   pdfMake.createPdf(documentDefinition).download('orden_compra.pdf');
  //   // }
  // }

  // getDocumentDefinition(): TDocumentDefinitions {
  //   const estilos: DiccionarioEstilos = {
  //     header: {
  //       fontSize: 18,
  //       bold: true,
  //       margin: [0, 10, 0, 10]
  //     },
  //     subheader: {
  //       fontSize: 14,
  //       bold: true,
  //       margin: [0, 5, 0, 5]
  //     },
  //     tableHeader: {
  //       bold: true,
  //       fontSize: 13,
  //       color: 'black'
  //     }
  //   };

  //   return {
  //     content: [
  //       { text: 'ORDEN DE COMPRA', style: 'header' },
  //       { text: `Número OC: ${this.ordenCompra?.idOrdenCompra}`, style: 'subheader' },
  //       { text: `Fecha elaboración: ${this.ordenCompra?.fechaElaboracion ? new Date(this.ordenCompra.fechaElaboracion).toLocaleDateString() : 'N/A'}`, style: 'subheader' },
  //       { text: `Grupo compras: ${this.ordenCompra?.grupoCompra}`, style: 'subheader' },
  //       { text: `Observaciones: ${this.ordenCompra?.observacion}`, style: 'subheader' },
  //       { text: 'INFORMACIÓN COMPRADOR', style: 'header' },
  //       { text: `Empresa: ${this.ordenCompra?.cliente.nombreCliente}`, style: 'subheader' },
  //       { text: `NIT: ${this.ordenCompra?.cliente.nitCliente}`, style: 'subheader' },
  //       { text: `Dirección: ${this.ordenCompra?.cliente.direccionCliente}`, style: 'subheader' },
  //       { text: `Teléfono: ${this.ordenCompra?.cliente.telefonoCliente}`, style: 'subheader' },
  //       { text: `Contacto: ${this.ordenCompra?.cliente.contactoCliente}`, style: 'subheader' },
  //       { text: `Email: ${this.ordenCompra?.cliente.emailCliente}`, style: 'subheader' },
  //       { text: `Ciudad: ${this.ordenCompra?.cliente.ciudadCliente}`, style: 'subheader' },
  //       { text: `Departamento: ${this.ordenCompra?.cliente.departamentoCliente}`, style: 'subheader' },
  //       { text: `País: ${this.ordenCompra?.cliente.paisCliente}`, style: 'subheader' },
  //       { text: 'INFORMACIÓN PROVEEDOR', style: 'header' },
  //       { text: `Empresa: ${this.ordenCompra?.proveedor.nombreProveedor}`, style: 'subheader' },
  //       { text: `NIT: ${this.ordenCompra?.proveedor.nitProveedor}`, style: 'subheader' },
  //       { text: `Dirección: ${this.ordenCompra?.proveedor.direccionProveedor}`, style: 'subheader' },
  //       { text: `Teléfono: ${this.ordenCompra?.proveedor.telefonoProveedor}`, style: 'subheader' },
  //       { text: `Contacto: ${this.ordenCompra?.proveedor.contactoProveedor}`, style: 'subheader' },
  //       { text: `Email: ${this.ordenCompra?.proveedor.emailProveedor}`, style: 'subheader' },
  //       { text: `Ciudad: ${this.ordenCompra?.proveedor.ciudadProveedor}`, style: 'subheader' },
  //       { text: `Departamento: ${this.ordenCompra?.proveedor.departamentoProveedor}`, style: 'subheader' },
  //       { text: `País: ${this.ordenCompra?.proveedor.paisProveedor}`, style: 'subheader' },
  //       { text: 'INFORMACIÓN ENTREGA/EJECUCIÓN', style: 'header' },
  //       { text: `Dirección: ${this.ordenCompra?.entregaEjecucionDetalle.direccion}`, style: 'subheader' },
  //       { text: `Teléfono: ${this.ordenCompra?.entregaEjecucionDetalle.telefono}`, style: 'subheader' },
  //       { text: `Contacto: ${this.ordenCompra?.entregaEjecucionDetalle.contacto}`, style: 'subheader' },
  //       { text: `Email: ${this.ordenCompra?.entregaEjecucionDetalle.email}`, style: 'subheader' },
  //       { text: `País: ${this.ordenCompra?.entregaEjecucionDetalle.pais}`, style: 'subheader' },
  //       { text: `Departamento: ${this.ordenCompra?.entregaEjecucionDetalle.departamento}`, style: 'subheader' },
  //       { text: `Ciudad: ${this.ordenCompra?.entregaEjecucionDetalle.ciudad}`, style: 'subheader' },
  //       { text: `Orden: ${this.ordenCompra?.entregaEjecucionDetalle.orden}`, style: 'subheader' },
  //       { text: 'DETALLES', style: 'header' },
  //       this.getDetallesTable(this.ordenCompra?.ordenCompraDetalles || []),
  //       { text: `Total Cantidad: ${this.ordenCompra?.cantidadTotal}`, style: 'subheader' },
  //       { text: `Valor Total: ${this.ordenCompra?.valorTotal}`, style: 'subheader' },
  //     ],
  //     styles: estilos 
  //   };
  // }

//   getDetallesTable(detalles: any[]) {
//     return {
//       table: {
//         widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
//         body: [
//           [{ text: 'Item', style: 'tableHeader' }, { text: 'Descripción', style: 'tableHeader' }, { text: 'Fecha Entrega', style: 'tableHeader' }, { text: 'Dirección', style: 'tableHeader' }, { text: 'Cantidad', style: 'tableHeader' }, { text: 'UM', style: 'tableHeader' }, { text: 'Precio', style: 'tableHeader' }, { text: 'Subtotal', style: 'tableHeader' }],
//           ...detalles.map(detalle => [detalle.item, detalle.descripcion, new Date(detalle.fechaEntrega).toLocaleDateString(), detalle.direccion, detalle.cantidad, detalle.unidadMedida, detalle.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }), detalle.subtotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })])
//         ]
//       }
//     };
  }
}