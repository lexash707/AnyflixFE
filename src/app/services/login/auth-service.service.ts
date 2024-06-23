import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Paths } from '../../../api/paths';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router:Router) { }

  login(username:String, password:String){
    this.http.post(Paths.paths.login, 
      {
        username : username,
        password : password 
      }).subscribe({ next: (data: any) => { 
        localStorage.setItem('user', data.user.username); 
        localStorage.setItem('token', data.token);
        localStorage.setItem('tip korisnika', data.user.tipkorisnika.idTipa);
        this.router.navigate(['']);
      } });
  }

  isLoggedIn():boolean{
    if ( localStorage.getItem('token') )
      return true;
    else return false;
  }

  isAdmin():boolean{
    if ( localStorage.getItem('tip korisnika') == "1")
      return true
    else return false;
  }

  logout(){
    localStorage.clear();
  }

}
