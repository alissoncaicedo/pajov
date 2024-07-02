import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Proveedor } from '../models/proveedor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  apiUrl = `${environment.baseUrlApi}/Proveedor`

  constructor(
    private http: HttpClient
  ) { }

  listarProveedores() {
    return this.http.get<Proveedor[]>(`${this.apiUrl}/ListaProveedores`);
  }
  
  getProveedorById(idProveedor: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.apiUrl}/ConsultarProveedorById/${idProveedor}`);
  }
  
  deleteProveedor(idProveedor: number) {
    return this.http.delete<Proveedor>(`${this.apiUrl}/EliminarProveedor/${idProveedor}`); 
  }
  
  postProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(`${this.apiUrl}/CrearProveedor`, proveedor);
  }
  
  putProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.apiUrl}/EditarProveedor`, proveedor);
  }
  
}
