import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paths } from '../../../api/paths';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddSeriesService {

  constructor(private http:HttpClient, private router:Router) { }

  saveSeries(naziv:string, sinopsis:string, slika:any, zanr:number[], imeSlike:string){
    const formData = new FormData();
    formData.append('naziv', naziv);
    formData.append('sinopsis', sinopsis);
    formData.append('image', slika),
    formData.append('zanrovi', JSON.stringify(zanr))
    formData.append('slika', imeSlike)
    
    return this.http.post(Paths.paths.addseries, formData)
    .subscribe({next: data => this.router.navigate([''])});
  }

}
