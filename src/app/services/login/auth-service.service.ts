import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Paths } from '../../../api/paths';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(username:String, password:String){
    this.http.post(Paths.paths.login, 
      {
        username : username,
        password : password 
      }).subscribe({ next: (data: any) => { 
        localStorage.setItem('user', data.user.username); 
        localStorage.setItem('token', data.token);
        localStorage.setItem('tip korisnika', data.user.tipkorisnika.idTipa) 
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
