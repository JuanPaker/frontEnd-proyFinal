import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AcercaDeEditComponent } from './components/acerca-de-edit/acerca-de-edit.component';
import { PorfolioEditComponent } from './components/porfolio-edit/porfolio-edit.component';
import { EducacionEditComponent } from './components/educacion-edit/educacion-edit.component';
import { EduFormComponent } from './components/forms/edu-form/edu-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    AptitudesComponent,
    BannerComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaLaboralComponent,
    ProyectosComponent,
    InicioSesionComponent,
    PorfolioComponent,
    AcercaDeEditComponent,
    PorfolioEditComponent,
    EducacionEditComponent,
    EduFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
