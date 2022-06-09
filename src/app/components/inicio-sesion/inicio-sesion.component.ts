import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
    this.form=this.formBuilder.group(
      {
        /* aqui van los datos de la api que se utiliza para la autenticacion, vamos a suponer que tenemos contrasenia */
          
          usuario:['',[Validators.required,Validators.email]],
          password:['',[Validators.required,Validators.minLength(8)]],
          /*  "nombre": "juan manuel",
            "apellido": "paker",
            "ocupacion": "estudiante",
            "acerca_de": "viajero",
            "fecha_nac": "1986-10-14",
            "nacionalidad": "argentino",
            "mail": "juanmanuelpaker@gmail.com",
            "sobre_mi": "traveller",
            "url_img_background": "lfnjdndsf",
            "url_img_perfil": "asdasdadasd"
          */
      }
      )

  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('usuario');
    }
  
    get Contraseña(){
      return this.form.get('password');
    }

  onEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.InicioSesion(this.form.value).subscribe(data=>{
      
      console.log("el boton funciona"+"DATA:" + JSON.stringify(data));
      
      this.ruta.navigate(['/porfolio']);
      
    })
  }

}
