import { Cliente } from "../../models/cliente.model";

export interface remisionDetalle {
    idRemisionDetalle: number,
    referenciaRemisionDetalle: string,
    descripcionRemisionDetalle: string,
    cantidadRemisionDetalle: number,
    tallaRemisionDetalle: string,
}

export interface Remision {
    idRemision: number,
    cliente: Cliente,
    idOrdenCompra: number,
    fechaRemision: Date,
    cantidadRemision: number,
    categoriaRemision:string ,
    remisionDetalles: remisionDetalle[],
}

export interface guardarRemision{
    idCliente: number,
    idOrdenCompra: number,
    FechaRemision: Date,
    cantidadRemision: number,
    categoriaRemision:string ,
    remisionDetalles: remisionDetalle[],
}