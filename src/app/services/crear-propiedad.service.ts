import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator, MinLengthValidator } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrearPropiedadService {

  constructor(private firebase: AngularFireDatabase) { }

  ListaPropiedad: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    casa: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      casa: '',
    });
  }

  getPropiedad() {
    this.ListaPropiedad = this.firebase.list('propiedad');
    return this.ListaPropiedad.snapshotChanges();
  }

  insertPropiedad(propiedad) {
    this.ListaPropiedad.push({
      name: propiedad.name,
      casa: propiedad.casa,
    });
  }

  updateRegistro(propiedad) {
    this.ListaPropiedad.update(propiedad.$key,
      {
      name: propiedad.name,
      casa: propiedad.casa,
    });
  }

  deleteRegistro($key: string) {
    this.ListaPropiedad.remove($key);
  }
}

