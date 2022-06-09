import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.obtenerDatos().subscribe (datos => {
      console.log(datos);
    });
  }
}
