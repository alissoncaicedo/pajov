import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  apiUrl = `${environment.baseUrlApi}/Empleado`

  constructor(
    private http: HttpClient
  ) { }

  getEmpleados() {
    return this.http.get<Empleado[]>(`${this.apiUrl}/ListaEmpleados`);
  }

}
