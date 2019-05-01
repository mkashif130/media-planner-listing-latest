import { TestBed } from '@angular/core/testing';

import { MediaChannelService } from './media-channel.service';

describe('MediaChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaChannelService = TestBed.get(MediaChannelService);
    expect(service).toBeTruthy();
  });
});
