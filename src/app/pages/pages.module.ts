import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { MaterialModule } from '../components/material/material.module';
import { LoginComponent} from './login/login.component';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,IonicModule,MaterialModule,FlexLayoutModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PagesModule { }
