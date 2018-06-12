import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
public email:string;
public password:string;

  constructor(public as:AuthService,
              public router:Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.as.registerUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log('algo va mal');
      console.log(err);
    });
  }

}
