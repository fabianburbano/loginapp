import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  ban:boolean = false;
  constructor(public router:Router,
              public afAuth:AngularFireAuth,
              public as:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.afAuth.authState.pipe(take(1), map(authState=>!!authState)));
      this.afAuth.authState.pipe(take(1), map(authState=>!!authState)).subscribe(p =>{
        if(!p){
          this.router.navigate(['/login']);
        }
      });
    return this.afAuth.authState.pipe(take(1), map(authState=>!!authState));
  }
}
