import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeEditComponent } from './components/acerca-de-edit/acerca-de-edit.component';
import { EduFormComponent } from './components/forms/edu-form/edu-form.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PorfolioEditComponent } from './components/porfolio-edit/porfolio-edit.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import {EducacionEditComponent} from './components/educacion-edit/educacion-edit.component'

const routes: Routes = [
  {path:'porfolio', component:PorfolioComponent},
  {path:'iniciosesion', component:InicioSesionComponent},
  {path:'', redirectTo:'porfolio',pathMatch:'full'},
  {path:'acercaDeEdit/:id' , component:AcercaDeEditComponent},
  {path: 'porfolioEdit' , component:PorfolioEditComponent},
  {path: 'educacionEdit' , component:EducacionEditComponent},
  {path: 'editarEdu/:id' , component:EduFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
