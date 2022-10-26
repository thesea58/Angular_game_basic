import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGuessControlComponent } from './word-guess-control.component';

describe('WordGuessControlComponent', () => {
  let component: WordGuessControlComponent;
  let fixture: ComponentFixture<WordGuessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordGuessControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordGuessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
