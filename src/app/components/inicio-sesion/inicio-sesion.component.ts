import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { loginI } from '../../Interfaces/loginInterface'


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private router:Router) { }

  datoslogin:loginI |any;

  login: any = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    
    
  }

  // enviar(): void{
  //   if this.usuario
  //   this.router.navigate(['porfolioEdit']);
  // }

}
