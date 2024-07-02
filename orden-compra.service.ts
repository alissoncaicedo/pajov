import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrdenCompra, guardarOrdenCompra } from '../models/orden-compra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  apiUrl = `${environment.baseUrlApi}/OrdenCompra`
  
  constructor(
    private http: HttpClient
  ) { }


  getOrdenesCompra() {
    return this.http.get<OrdenCompra[]>(`${this.apiUrl}/ListaOrdenCompras`);
  }

  getOrdenCompraById(id: number) {
    return this.http.get<OrdenCompra>(
      `${this.apiUrl}/ConsultarOrdenContratoById/${id}`);
  }

  postOrdenCompra(ordenCompra: guardarOrdenCompra): Observable<guardarOrdenCompra> {
    return this.http.post<guardarOrdenCompra>(
      `${this.apiUrl}/CrearOrdenCompra`, ordenCompra);
  }


}
