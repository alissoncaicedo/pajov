import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contrato, ContratoById } from '../models/contrato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  apiUrl = `${environment.baseUrlApi}/Contrato`

  constructor(
    private http: HttpClient
  ) { }

  listarContratos() {
    return this.http.get<Contrato[]>(`${this.apiUrl}/ListaContratos`);
  }

  getContratoById(idContrato: number): Observable<ContratoById> {
    return this.http.get<ContratoById>(`${this.apiUrl}/ConsultarContratoById/${idContrato}`);
  }

  deleteContrato(idContrato: number): Observable<Contrato> {
    return this.http.delete<Contrato>(`${this.apiUrl}/EliminarContrato/${idContrato}`);
  }

  postContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(`${this.apiUrl}/CrearContrato`, contrato);
  }

  putContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/EditarContrato`, contrato);
  }
}
