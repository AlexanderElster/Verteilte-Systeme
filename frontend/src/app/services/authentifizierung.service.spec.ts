import { TestBed } from '@angular/core/testing';

import { AuthentifizierungService } from './authentifizierung.service';

describe('AuthentifizierungService', () => {
  let service: AuthentifizierungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentifizierungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
