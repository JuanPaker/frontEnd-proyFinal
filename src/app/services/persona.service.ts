import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:string="localhost:8080/personas/crear"; // esta seria la direccion de la api para que tome los datos 

  constructor(private http:HttpClient) {}
    obtenerDatos():Observable<any>{
      //return this.http.get<any>('./assets/datos/datos.json');  => esto se pone para que traiga los datos a mostrar en el html desde el json. 
      return this.http.get<any>(this.url+"persona");

    }
   
}
