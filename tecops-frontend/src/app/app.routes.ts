import { Routes } from '@angular/router';
import { GastosComponent } from './views/gastos/gastos.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { PersonaComponent } from './views/persona/persona.component';
import { MenuComponent } from './views/menu/menu.component';
import { InicioComponent } from './views/inicio/inicio.component';


export const routes: Routes = [{ path: 'inicio', component: InicioComponent },
    { path: 'gastos', component: GastosComponent },
    { path: 'personas', component: PersonaComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }];
