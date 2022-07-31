import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperLaboralService {

  url: String = 'http://localhost:8080/personas';
  
  constructor(private http:HttpClient) { }

  obtenerDatosExperLaboral():Observable<any>{
    return this.http.get<any>(this.url + '/traer/perfil')
  }
}
