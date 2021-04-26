import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { first} from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private afDatabase: AngularFireDatabase) { }

  crearUsuario(nombreUsuario: string, password: string) {
    const usuariosRef = this.afDatabase.list('usuarios');
    usuariosRef.push({
      nombreUsuario,
      password
    });
  }

  async login( nombreUsuario: string, password: string) {
    const usuariosRef = this.afDatabase.list<Usuario>('usuarios', ref => ref.orderByChild('nombreUsuario').equalTo(nombreUsuario));
    const resultado = await usuariosRef.valueChanges().pipe(first()).toPromise();
    if (resultado.length === 1) {
      const usuario = resultado[0];
      if (usuario.password === password){
        return true;
      }
      return false;
    }
    else {
      return false;
    }
  }


}

