import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { MaterialModule } from '../components/material/material.module';
import { LoginComponent} from './login/login.component';
import { ControlComponent } from './control/control.component';
import { PublicoComponent } from './publico/publico.component';
import { RegistroComponent } from './publico/registro/registro.component';
import { RsalidaComponent } from './rsalida/rsalida.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { CrearPropiedadComponent } from './administracion/crear-propiedad/crear-propiedad.component';
import { CrearUsuarioComponent } from './administracion/crear-usuario/crear-usuario.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    LoginComponent,
    ControlComponent,
    PublicoComponent,
    RegistroComponent,
    RsalidaComponent,
    PropiedadComponent,
    AdministracionComponent,
    CrearPropiedadComponent,
    CrearUsuarioComponent,
    DialogExampleComponent
   ],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    ControlComponent,
    PublicoComponent,
    RegistroComponent,
    RsalidaComponent,
    PropiedadComponent,
    AdministracionComponent,
    CrearPropiedadComponent,
    CrearUsuarioComponent,
    DialogExampleComponent
  ],

})
export class PagesModule { }
