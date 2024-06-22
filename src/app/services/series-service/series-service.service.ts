import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../../model/movie';

@Injectable({
  providedIn: 'root'
})
export class SeriesServiceService {
  
  constructor(private httpClient:HttpClient) { 

  }

  getAll():Observable<Movie[]> {
    return this.httpClient.get<any>("http://localhost:8080/series/all")
    .pipe(map(data => data.map((item: { naziv: string; slika: string; idSerije: number; }) => new Movie(item.naziv, item.slika, item.idSerije))));
  }
}
