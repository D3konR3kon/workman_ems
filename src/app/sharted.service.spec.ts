import { TestBed } from '@angular/core/testing';

import { ShartedService } from './sharted.service';

describe('ShartedService', () => {
  let service: ShartedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShartedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
