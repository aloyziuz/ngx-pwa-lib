import { TestBed } from '@angular/core/testing';

import { PwaLibService } from './pwa-lib.service';

describe('PwaLibService', () => {
  let service: PwaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
