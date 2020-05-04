import { TestBed } from '@angular/core/testing';

import { KursServiceService } from './kurs-service.service';

describe('KursServiceService', () => {
  let service: KursServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
