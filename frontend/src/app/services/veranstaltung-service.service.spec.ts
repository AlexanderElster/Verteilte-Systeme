import { TestBed } from '@angular/core/testing';

import { VeranstaltungServiceService } from './veranstaltung-service.service';

describe('VeranstaltungServiceService', () => {
  let service: VeranstaltungServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeranstaltungServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
