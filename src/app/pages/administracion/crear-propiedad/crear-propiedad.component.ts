import { Component, OnInit } from '@angular/core';
import { CrearPropiedadService } from 'src/app/services/crear-propiedad.service';

@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.scss'],
})
export class CrearPropiedadComponent implements OnInit {

  constructor(public service: CrearPropiedadService, ) { }


  ngOnInit() {
    this.service.getPropiedad();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertPropiedad(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }

}
