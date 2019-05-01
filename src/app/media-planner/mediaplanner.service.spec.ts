import { TestBed } from '@angular/core/testing';

import { MediaplannerService } from './mediaplanner.service';

describe('MediaplannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaplannerService = TestBed.get(MediaplannerService);
    expect(service).toBeTruthy();
  });
});
