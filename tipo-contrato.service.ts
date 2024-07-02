import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TipoContrato } from '../models/tipo-contrato.model';

@Injectable({
  providedIn: 'root'
})
export class TipoContratoService {

  apiUrl = `${environment.baseUrlApi}/TipoContrato`
  
  constructor(
    private http: HttpClient
  ) { }

  getTipoContratos() {
    return this.http.get<TipoContrato[]>(`${this.apiUrl}/ListaTipoContratos`);
  }
}
