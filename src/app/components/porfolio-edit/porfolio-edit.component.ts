import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-porfolio-edit',
  templateUrl: './porfolio-edit.component.html',
  styleUrls: ['./porfolio-edit.component.css']
})
export class PorfolioEditComponent implements OnInit {
  
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


}