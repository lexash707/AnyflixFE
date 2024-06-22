import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie/movie';
import { Paths } from '../../../api/paths';
import { Details } from '../../model/details/details';
import { Review } from '../../model/review/review';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) {}

  getMovieById(id: number): Observable<{ movie: Movie, reviews: Review[] }> {
    const url = `${Paths.paths.seriesDetails}/${id}`
    return this.http.get<Details>(url).pipe(
      map(response => {
        const movie = new Movie(response.serija.naziv, response.serija.slika, response.serija.idSerije, response.serija.sinopsis);
        const reviews = response.ocene.map(ocena => new Review(ocena.ocena, ocena.komentar));
        return { movie, reviews };
      })
    );
  }

  saveReview(review : Review, seriesId: number){
    return this.http.post(Paths.paths.seriesReview, 
      {
        serija: seriesId,
        komentar: review.comment,
        ocena: review.rating
      }).subscribe();
  }




}
