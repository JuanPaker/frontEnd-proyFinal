import { Component, OnInit } from '@angular/core';
import {ExperLaboralService} from 'src/app/services/exper-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  datosExp:any;

  constructor(private datosExperLaboral:ExperLaboralService) { }

  ngOnInit(): void {
    this.datosExperLaboral.obtenerDatosExperLaboral().subscribe(datos => {
      console.log(datos);
      this.datosExp=datos;
    });
  }

}
