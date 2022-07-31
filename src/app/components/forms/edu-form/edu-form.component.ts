import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validator} from '@angular/forms';
import { EducacionService} from 'src/app/services/educacion.service';
import {Router, ActivatedRoute} from '@angular/router';
import {educacionI} from '../../../Interfaces/EduInterface';

@Component({
  selector: 'app-edu-form',
  templateUrl: './edu-form.component.html',
  styleUrls: ['./edu-form.component.css']
})
export class EduFormComponent implements OnInit {

  eduid: number|any;

  constructor(private router:Router, private eduservice:EducacionService, private activatedroute:ActivatedRoute) { 
  this.eduid = 0;
    
  }

  datosEdu:educacionI|any;

  educacion: any = new FormGroup({
    id: new FormControl(''),
    carrera: new FormControl(''),
    establecimiento: new FormControl(''),
    fechafin: new FormControl(''),
    fechaInicio: new FormControl(''),
    titulo: new FormControl(''),
    urlImgEstablecimiento: new FormControl('')
  })

  ngOnInit(): void {

    let eduid = this.activatedroute.snapshot.paramMap.get('id');
    console.log("id" + eduid)
    this.eduservice.obtenerDatosEducacion().subscribe(data => {
      this.datosEdu = data;
    console.log("edulist" + data);
     //this.datosEdu = data;

    this.educacion.setValue({
      'id': eduid,
      'carrera': this.datosEdu.carrera,
      'establecimiento': this.datosEdu.establecimiento,
      'fechafin': this.datosEdu.fechafin,
      'fechainicio': this.datosEdu.fechainicio,
      'titulo': this.datosEdu.titulo,
      'urlImgEstablecimiento': this.datosEdu.urlImgEstablecimiento
    });
    })
  }

  postForm(educacion: educacionI){
    this.eduservice.editarEdu(educacion).subscribe(data =>{
  //    console.log(data)
    })
  }


}
