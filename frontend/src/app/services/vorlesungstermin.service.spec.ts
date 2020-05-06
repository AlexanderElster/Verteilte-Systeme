import { TestBed } from '@angular/core/testing';

import { VorlesungsterminService } from './vorlesungstermin.service';

describe('VorlesungsterminService', () => {
  let service: VorlesungsterminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VorlesungsterminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
