import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie-input',
  templateUrl: 'movieInput.component.html',
  providers: [MovieService]
})
export class MovieInputComponent {

  public inputForm = this._fb.group({
    movieId: ["", [<any>Validators.required, <any>Validators.minLength(9)]]
  });

  constructor(private _fb:FormBuilder, private _movieService:MovieService) {
  }

  scrapeImdbMovie(event:any) {
    var movieId = this.inputForm.value.movieId; // use the movieId from form
    this._movieService.scrapeMovie(movieId);
  }

}
