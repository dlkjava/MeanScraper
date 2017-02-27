import { MoviesComponent } from './movies.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MoviesComponent', function () {
  let de: DebugElement;
  let comp: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    comp = fixture.componentInstance;
    //de = fixture.debugElement.query(By.css('h1'));
  });

  //it('should create component', () => expect(comp).toBeDefined() );
  //
  //it('should have expected <h1> text', () => {
  //  fixture.detectChanges();
  //  const h1 = de.nativeElement;
  //  expect(h1.innerText).toMatch(/angular/i,
  //    '<h1> should say something about "Angular"');
  //});
});
