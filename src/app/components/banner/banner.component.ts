import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
//export class BannerComponent implements OnInit {
  
export class BannerComponent{
  
  misDatos:any;

  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.obtenerDatos().subscribe (datos => {
      console.log(datos);
      this.misDatos=datos;
    });
  

  }
}
