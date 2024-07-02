import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Cliente } from '../models/cliente.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl = `${environment.baseUrlApi}/Cliente`

  constructor(
    private http: HttpClient
  ) { }


  listarClientes() {
    return this.http.get<Cliente[]>(`${this.apiUrl}/ListaClientes`);
  }

  getClienteById(idCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/ConsultarClienteById/${idCliente}`);
  }

  deleteCliente(idCliente: number) {
    return this.http.delete<Cliente>(`${this.apiUrl}/EliminarCliente/${idCliente}`); 
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/CrearCliente`, cliente);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/EditarCliente`, cliente);
  }

}
