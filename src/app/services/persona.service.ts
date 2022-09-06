import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import {acerdaDeInterface} from '../Interfaces/acercaDeInterface.interface';
import { personaI } from '../Interfaces/persona.interface';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:String = 'https://aqueous-falls-89804.herokuapp.com/personas';  
  //url:String = 'http://localhost:8080/personas';
  
  constructor(private http:HttpClient) {}
    

  obtenerDatos():Observable<personaI>{
    return this.http.get<personaI>(this.url + '/traer/perfil')
  }

  // obtenerDatos():Observable<personaI>{
  //   return this.http.get<personaI>(this.url + '/traer/perfil/')
  // }

  buscarPersona(id: number|any):Observable<personaI>{
    let direccion = this.url + '/buscar/' + id;
    return this.http.get<personaI>(direccion);
  }
  
  crearPersona(form:acerdaDeInterface):Observable<any>{
    let direccion = this.url + '/crear';
    return this.http.post<any>(direccion, form);

  }

  traerPersona():Observable<acerdaDeInterface>{
    let direccion = this.url + '/traer/perfil';
    return this.http.get<acerdaDeInterface>(direccion);
  }
    // de jose aleman
  editarPersona(form:personaI):Observable<any>{
    let direccion = this.url + '/editar/' + form.id;
    return this.http.put<personaI>(direccion, form);
  }    
  
  //  deletePersona(persona: personaI):Observable<any>{
    
  //   let direccion = this.url + '/eliminar/' + persona.id;
  //     // let options = {
  //     //   Headers: new HttpHeaders({
  //     //     'conten-type':'application/json'
  //     //   }),
  //     //   body:persona
  //     // }
  //    return this.http.delete<personaI>(direccion);
  // } 
  
  //return this.http.get<any>('./assets/datos/datos.json'); // esto se pone para que traiga los datos a mostrar en el html desde el json. 
      
    
/*
  obtenerDatosEducacion():Observable<any>{
       
    return this.http.get<any>('./assets/datos/educacion.json'); // esto se pone para que traiga los datos a mostrar en el html desde el json. 
      
  }

  obtenerListadoPersonas():Observable<any>{
       
    return this.http.get<any[]>(this.url + '/traer'); // esto se pone para que traiga los datos a mostrar en el html desde el json. 
      
  }
  */

}