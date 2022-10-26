import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardViewerComponent } from './flip-card-viewer.component';

describe('FlipCardViewerComponent', () => {
  let component: FlipCardViewerComponent;
  let fixture: ComponentFixture<FlipCardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipCardViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
