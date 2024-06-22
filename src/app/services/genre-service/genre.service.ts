import { Injectable } from '@angular/core';
import { Genre } from '../../model/genre/genre';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Paths } from '../../../api/paths';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { 

  }

  getAll():Observable<Genre[]> {
    return this.httpClient.get<any>(Paths.paths.genres)
    .pipe(map(data => data.map((item: { naziv: string; idZanr: number; }) => new Genre(item.naziv, item.idZanr))));
  }

  openFileReport(){
    this.httpClient.get<any>(Paths.paths.genrereport, {headers: {} , responseType: 'blob' as 'json'}).subscribe({
      next: data => {
        var o = window.URL.createObjectURL(data);
        window.open(o);
        console.log(o);
      }
    })
  }
}
