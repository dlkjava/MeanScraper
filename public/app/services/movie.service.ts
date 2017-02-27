import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Movie } from '../movie';

@Injectable()
export class MovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private movieApiUrl = '/api/movie';
  private moviesApiUrl = '/api/movies';
  private scrapeApiUrl = '/api/scrape';

  constructor(private http:Http) {
  }

  getMovies():Promise<Movie[]> {
    return this.http.get(this.moviesApiUrl)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(e => console.log("reject: " + e));
  }

  scrapeMovie(id:String):Promise<Movie> {
    return this.http.get(this.scrapeApiUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(e => console.log("reject: " + e));
  }

  removeMovie(id:String):Promise<String> {
    return this.http.delete(this.movieApiUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as String)
      .catch(e => console.log("reject: " + e));
  }

}
