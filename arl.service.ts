import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Arl } from '../../../core/models/arl.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArlService {

  apiUrl = `${environment.baseUrlApi}/Arl`; 

  constructor(private http: HttpClient) {}

  crearArl(formulario: Arl): Observable<Arl>{
    return this.http.post<Arl>(
      `${this.apiUrl}/CrearArl`,
      formulario
    );
  }

  actualizarArl(formulario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ActualizarArl`, formulario)
  }

  listarArl(){
    return this.http.get<Arl[]>(
      `${this.apiUrl}/ConsultarArl`
    );
  }

  getArlById(IdArl: number): Observable<Arl>{
    return this.http.get<Arl>(
      `${this.apiUrl}/ConsultarArlPorId?IdArl=${IdArl}`
    );
  }

  deletArl(IdArl: number): Observable<any>{
    const url = `${this.apiUrl}/EliminarArl/${IdArl}`;
    return this.http.delete(url);
  }
}
