import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGuessViewerComponent } from './word-guess-viewer.component';

describe('WordGuessViewerComponent', () => {
  let component: WordGuessViewerComponent;
  let fixture: ComponentFixture<WordGuessViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordGuessViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordGuessViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
