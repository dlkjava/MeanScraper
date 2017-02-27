import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  providers: [MovieService]
})
export class MoviesComponent {
  movies:Array<Movie> = [];

  constructor(private _movieService:MovieService) {
  }

  getMovies():void {
    this._movieService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit():void {
    this.getMovies();
  }

  removeMovie(movieId:String) {
    this._movieService.removeMovie(movieId);
    this.getMovies(); // to refresh the movies array
  }

}
