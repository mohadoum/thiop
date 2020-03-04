import { TestBed } from '@angular/core/testing';

import { RestoService } from './restaurant.service';

describe('RestoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestoService = TestBed.get(RestoService);
    expect(service).toBeTruthy();
  });
});
