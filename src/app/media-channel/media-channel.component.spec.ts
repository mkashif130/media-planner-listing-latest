import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaChannelComponent } from './media-channel.component';

describe('MediaChannelComponent', () => {
  let component: MediaChannelComponent;
  let fixture: ComponentFixture<MediaChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
