import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator, MinLengthValidator } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firebase: AngularFireDatabase) { }

  ListaRegistro: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    documento: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    tpublico: new FormControl('1'),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      documento: '',
      tpublico: '1',
    });
  }

  getRegistro() {
    this.ListaRegistro = this.firebase.list('publico');
    return this.ListaRegistro.snapshotChanges();
  }

  insertRegistro(registro) {
    Storage.set({
      key: 'personaRegistro',
      value: JSON.stringify({
        fullName: registro.fullName,
        documento: registro.documento,
        tpublico: registro.tpublico,
      })
    });
  }

  updateRegistro(registro) {
    this.ListaRegistro.update(registro.$key,
      {
      fullName: registro.fullName,
      documento: registro.documento,
      tpublico: registro.tpublico,
    });
  }

  deleteRegistro($key: string) {
    this.ListaRegistro.remove($key);
  }
}
