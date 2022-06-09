import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  misDatos:any;

  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.obtenerDatos().subscribe (datos => {
      console.log(datos);
      this.misDatos=datos;
    });
  }
}