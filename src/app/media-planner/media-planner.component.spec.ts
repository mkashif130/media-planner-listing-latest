import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlannerComponent } from './media-planner.component';

describe('MediaPlannerComponent', () => {
  let component: MediaPlannerComponent;
  let fixture: ComponentFixture<MediaPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
