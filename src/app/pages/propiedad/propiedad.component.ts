import { Component, OnInit } from '@angular/core';
import { PropiedadService } from 'src/app/services/propiedad.service';
import { CrearPropiedadService } from 'src/app/services/crear-propiedad.service';


@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.scss'],
})
export class PropiedadComponent implements OnInit {

  constructor(public propiedadService: PropiedadService, public service: CrearPropiedadService) { }

  ngOnInit() {}

}
