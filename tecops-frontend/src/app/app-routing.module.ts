import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './views/gastos/gastos.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { PersonaComponent } from './views/persona/persona.component';
import { MenuComponent } from './views/menu/menu.component';
import { InicioComponent } from './views/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'personas', component: PersonaComponent }, // Asegúrate de ajustar si esta ruta tiene que ver con personas
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas usando RouterModule
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en el resto de la app
})
export class AppRoutingModule { }
