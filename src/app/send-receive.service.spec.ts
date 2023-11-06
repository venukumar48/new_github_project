import { TestBed } from '@angular/core/testing';

import { SendReceiveService } from './send-receive.service';

describe('SendReceiveService', () => {
  let service: SendReceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendReceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
