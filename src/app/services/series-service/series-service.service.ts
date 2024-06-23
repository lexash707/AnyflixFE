import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../../model/movie/movie';
import { Paths } from '../../../api/paths';

@Injectable({
  providedIn: 'root'
})
export class SeriesServiceService {
  
  constructor(private httpClient:HttpClient) { 

  }

  getAll(search? : String, filter? : number):Observable<Movie[]> {
    return this.httpClient.post<any>(Paths.paths.searched, {search: search, zanr:filter})
    .pipe(map(data => data.map((item: 
      { naziv: string;
         slika: string; 
         idSerije: number; 
         sinopsis: string}) => new Movie(item.naziv, item.slika, item.idSerije, item.sinopsis))));
  }


  openFileReport(){
    this.httpClient.post<any>(Paths.paths.seriesreport, {} , {headers: {} , responseType: 'blob' as 'json'}).subscribe({
      next: data => {
        var o = window.URL.createObjectURL(data);
        window.open(o);
        console.log(o);
      }
    })
  }

}
