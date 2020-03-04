import { TestBed } from '@angular/core/testing';

import { PlatsService } from './plats.service';

describe('PlatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatsService = TestBed.get(PlatsService);
    expect(service).toBeTruthy();
  });
});
