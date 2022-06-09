import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //aqui va la url de la api para la autenticacion.
  url="localhost:8080/personas/crear";

  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("el servicio de autenticacion esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any> (JSON.parse(sessionStorage.getItem('currentUser')||'{}')
    )
  }

  InicioSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      
      sessionStorage.setItem('currentUser', JSON.stringify(data));      
      return data;
    }))
  }

}
