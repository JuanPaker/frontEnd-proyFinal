import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import {Router} from '@angular/router';
import { personaI } from '../../Interfaces/persona.interface';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  misDatos:any;


  constructor(private persoServ:PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.persoServ.obtenerDatos().subscribe (datos => {

      this.misDatos=datos;
   });
    
  }


  editarPersona(id:number):void{
    this.router.navigate(['acercaDeEdit',id]);
    console.log("id enviado" + id)
    
  }


 /* usuario: String;
  nombre: String;
  apellido:String;
  password: String;
  ocupacion: String;
  acercaDe: String;
  fechaNac: String;
  nacionalidad: String;
  mail: String;
  sobreMi: String;
  setUrlImgBackground: String;
  setUrlImgPerfil: String;
*/
  /*constructor(usuario: String,
    nombre: String,
    apellido:String,
    password: String,
    ocupacion: String,
    acercaDe: String,
    fechaNac: String,
    nacionalidad: String,
    mail: String,
    sobreMi: String,
    setUrlImgBackground: String,
    setUrlImgPerfil: String) 
    {
      this.usuario = usuario;
      this.nombre = nombre;
      this.apellido = apellido;
      this.password = password;
      this.ocupacion = ocupacion;
      this.acercaDe = acercaDe;
      this.fechaNac = fechaNac; 
      this.nacionalidad = nacionalidad;
      this.mail = mail;
      this.sobreMi = sobreMi;
      this.setUrlImgBackground = setUrlImgBackground;
      this.setUrlImgPerfil = setUrlImgPerfil;
     }*/

  
 
}