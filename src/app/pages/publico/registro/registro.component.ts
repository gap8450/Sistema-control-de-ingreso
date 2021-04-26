import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { RegistroService } from 'src/app/services/registro.service';
import { RegnotificacionService} from 'src/app/services/regnotificacion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {


  constructor(public service: RegistroService, public dialog: MatDialog, public Regnotificacionservice: RegnotificacionService) { }


  ngOnInit() {
    this.service.getRegistro();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertRegistro(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.Regnotificacionservice.success(':: Se ha registrado con exito');
    }
  }
}
