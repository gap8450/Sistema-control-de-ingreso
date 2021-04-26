import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ControlComponent } from './pages/control/control.component';
import { PublicoComponent } from './pages/publico/publico.component';
import { RegistroComponent } from './pages/publico/registro/registro.component';
import { RsalidaComponent } from './pages/rsalida/rsalida.component';
import { PropiedadComponent } from './pages/propiedad/propiedad.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { CrearPropiedadComponent } from './pages/administracion/crear-propiedad/crear-propiedad.component';
import { CrearUsuarioComponent } from './pages/administracion/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'control',
    component: ControlComponent
  },
  {
    path: 'publico',
    component: PublicoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'rsalida',
    component: RsalidaComponent
  },
  {
    path: 'administracion',
    component: AdministracionComponent
  },
  {
    path: 'crear-propiedad',
    component: CrearPropiedadComponent
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'propiedad',
    component: PropiedadComponent
  },
  {
    path: '',
    redirectTo: 'propiedad',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
