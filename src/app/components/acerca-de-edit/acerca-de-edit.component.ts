import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Form, FormControl, FormGroup, Validator } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import {Router, ActivatedRoute} from '@angular/router';
import { acerdaDeInterface } from '../../Interfaces/acercaDeInterface.interface';
import { personaI } from '../../Interfaces/persona.interface';



@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent implements OnInit  {
  
  personaid : number|any;
  
  constructor(private router:Router, private personaserv:PersonaService, private activatedroute:ActivatedRoute) {  
    this.personaid = 0;
   }
   
  datosPerso:personaI | any;

  acerca:any =  new FormGroup({
  id: new FormControl(''),
  nombre: new FormControl(''),
  apellido: new FormControl(''),
  ocupacion: new FormControl(''),
  mail: new FormControl(''),
  acercaDe: new FormControl(''),
  urlImgBackground: new FormControl(''),
  urlImgPerfil: new FormControl('')
  });

  ngOnInit(): void {

    let personaid = this.activatedroute.snapshot.paramMap.get('id');
    console.log("id recibido" + personaid)
      //this.personaserv.buscarPersona(this.personaid).subscribe(data => {
      //this.personaserv.traerPersona().subscribe(data => {
      this.personaserv.obtenerDatos().subscribe(data => {  
      
      this.datosPerso = data;
      console.log(data.id)
      //this.personaserv.buscarPersona(data.id)
      this.acerca.setValue({
      'id':data.id,
      'nombre' : this.datosPerso.nombre,
      'apellido' : this.datosPerso.apellido,
      'ocupacion' : this.datosPerso.ocupacion,
      'mail' : this.datosPerso.mail,
      'acercaDe': this.datosPerso.acercaDe,
      'urlImgBackground': this.datosPerso.urlImgBackground,
      'urlImgPerfil': this.datosPerso.urlImgPerfil
      });
    // console.log(data) // -> con esto me trae todo el array sumado a la educacion y exp laboral
   //  console.log(this.acerca.value) // con esto me trae la interface acercaDeEdit vacia
    })
     
 } 

 postForm(persona: personaI){  //  <!--este postForm es del video de jose aleman-->
  //console.log(form)
  this.personaserv.editarPersona(persona).subscribe(data => {
    console.log(data)

  })
}

// eliminarPersona(acerca:personaI){
//  // console.log("eliminar")
//  let id :number | any = acerca.id;
// this.personaserv.deletePersona(id)
//   console.log(id)
//}

   // public editarPersona(){ 
    //this.personaserv.editarPersona(form).subscribe( data => {
    //})

  
  /*editarPersona(): void{
    this.router.navigate(['']);
  }*/
}

