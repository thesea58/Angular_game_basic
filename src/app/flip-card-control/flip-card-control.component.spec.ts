import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardControlComponent } from './flip-card-control.component';

describe('FlipCardControlComponent', () => {
  let component: FlipCardControlComponent;
  let fixture: ComponentFixture<FlipCardControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipCardControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
