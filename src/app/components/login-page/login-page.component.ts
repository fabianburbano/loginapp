import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public as:AuthService,
              public router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.as.loginEmail(this.email, this.password)
    .then((res) => {
      console.log('se logueo bien');
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log('algo va mal');
      this.router.navigate(['/login']);
    });
  }

}
