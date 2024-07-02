import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Remision, guardarRemision } from '../../../core/models/remision.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemisionService {

  apiUrl = `${environment.baseUrlApi}/Remision`; 

  constructor(private http: HttpClient) {}

  crearRemision(remision: guardarRemision): Observable<guardarRemision>{
    return this.http.post<guardarRemision>(
      `${this.apiUrl}/CrearRemision`,
      remision
    );
  }

  listarRemision(){
    return this.http.get<Remision[]>(
      `${this.apiUrl}/ConsultarRemision`
    );
  }

  getRemisionById(IdRemision: number) {
    return this.http.get<Remision>(
      `${this.apiUrl}/ConsultarRemisionById/${IdRemision}`
    );
  }

}
