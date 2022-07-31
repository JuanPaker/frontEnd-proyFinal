import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

    datosEdu:any;

  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatosEducacion().subscribe(datos => {
    this.datosEdu=datos;
   });
  }
}

