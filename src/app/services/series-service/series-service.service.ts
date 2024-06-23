import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Movie } from '../../model/movie/movie';
import { Paths } from '../../../api/paths';

@Injectable({
  providedIn: 'root'
})
export class SeriesServiceService {

  public bs = new BehaviorSubject<Movie[]>([]);
  
  constructor(private httpClient:HttpClient) { 

  }

  getAll(search? : String, filter? : any):void {
    this.httpClient.post<any>(Paths.paths.searched, {search: search, zanr:filter}).subscribe({next: data => {
      
      this.bs.next(
      data.map((item: 
        { naziv: string;
           slika: string; 
           idSerije: number; 
           sinopsis: string}) => new Movie(item.naziv, item.slika, item.idSerije, item.sinopsis)));
    }})
  }

  getFav():void{
    this.httpClient.get<any>(Paths.paths.showfav).subscribe({next: data => {  
      this.bs.next(
      data.map((item: 
        { naziv: string;
           slika: string; 
           idSerije: number; 
           sinopsis: string}) => new Movie(item.naziv, item.slika, item.idSerije, item.sinopsis)));
    }})
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
