import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { educacionI } from '../Interfaces/EduInterface';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url:String = 'https://aqueous-falls-89804.herokuapp.com/personas';

  constructor(private http:HttpClient) { }

  obtenerDatosEducacion():Observable<educacionI[]>{
    let direccion = this.url + '/traer/perfil/';
    return this.http.get<educacionI[]>(direccion);
    //return this.http.get<educacionI>[](this.url + '/ver' + id);
    //return this.http.get<educacionI>('http://localhost:8080/personas/traer/perfil');
  }

  editarEdu(form:educacionI):Observable<any>{
    let direccion = this.url + '/editar/' + form.id;
    return this.http.put<educacionI>(direccion, form);
  }
}
