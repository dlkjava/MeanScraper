import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MovieInputComponent } from './components/movieInput.component';
import { MoviesComponent } from './components/movies.component';

@NgModule({
  imports: [BrowserModule, HttpModule, ReactiveFormsModule],
  declarations: [AppComponent, MovieInputComponent, MoviesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
