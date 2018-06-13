import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public as:AuthService,
              public router:Router,
              public flashMensaje:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.as.loginEmail(this.email, this.password)
    .then((res) => {
      console.log('se logueo bien');
      this.flashMensaje.show('Usuario ha iniciado session correctamente.', {cssClass: 'alert-success' , timeout:4000});
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log('algo va mal');
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger' , timeout:4000});
      this.router.navigate(['/login']);
    });
  }

}
