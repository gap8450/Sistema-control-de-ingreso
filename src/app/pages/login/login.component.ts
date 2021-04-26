import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide: boolean;
  nombreUsuario = '';
  password = '';

  constructor(private loginService: LoginService, public dialog: MatDialog, private router: Router) {
    this.hide = true;
   }

  async login() {
    const resultado = await this.loginService.login(this.nombreUsuario, this.password);
    if (resultado) {
      this.router.navigate (['control']);
    }
    else {
        this.openDialog ();
    }
  }

  ngOnInit() {}

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      width: '300px',
    });
  }


}
