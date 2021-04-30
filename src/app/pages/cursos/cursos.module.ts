import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { cursosRouting } from './cursos.routing';
import { AppModule } from 'src/app/app.module';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cursosRouting),
    
  ]
})
export class CursosModule { }
