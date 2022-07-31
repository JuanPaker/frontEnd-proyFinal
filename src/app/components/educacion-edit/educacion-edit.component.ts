import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { educacionI } from 'src/app/Interfaces/EduInterface';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {

  
  eduid: number|any;

  constructor(private datosEducacion:EducacionService, private router:Router, private activatedroute:ActivatedRoute) { 
    this.eduid = 0;
  }

  datosEdu: educacionI|any;
  ngOnInit(): void {
    let eduid = this.activatedroute.snapshot.paramMap.get('id');
    
    
    this.datosEducacion.obtenerDatosEducacion().subscribe(datos => {
      console.log("datos edu"  + datos);
    this.datosEdu=datos;
   });
  }

  editarEdu(id:number): void{
    this.router.navigate(['editarEdu', id]);
    console.log("id enviado edu"+ id)
  }

}
