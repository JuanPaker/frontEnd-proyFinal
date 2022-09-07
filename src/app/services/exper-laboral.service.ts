import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperLaboralService {

  url: String = 'https://aqueous-falls-89804.herokuapp.com';
  
  constructor(private http:HttpClient) { }

  obtenerDatosExperLaboral():Observable<any>{
    return this.http.get<any>(this.url + '/personas/traer/perfil')
  }
}
