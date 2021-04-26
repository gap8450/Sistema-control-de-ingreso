import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  propiedadList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) {
    this.propiedadList = this.firebase.list('propiedad');
    this.propiedadList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
           ...item.payload.val()
          };
        });
      });
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    lote: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      lote: 0,
    });
  }

  async insertPropiedad(propiedad){
    const persona = await Storage.get({
      key: 'personaRegistro'
    });
    const personaobj = JSON.parse(persona.value);
    const personacompleta = {
      ...personaobj, ...propiedad
    };
    const listaRegistro = this.firebase.list('publico');
    listaRegistro.push(personacompleta);
  }
}
