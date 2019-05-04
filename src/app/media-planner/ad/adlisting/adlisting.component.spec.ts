import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlistingComponent } from './adlisting.component';

describe('AdlistingComponent', () => {
  let component: AdlistingComponent;
  let fixture: ComponentFixture<AdlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
