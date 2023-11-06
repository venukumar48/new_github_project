import { TestBed } from '@angular/core/testing';

import { PhotoresolverService } from './photoresolver.service';

describe('PhotoresolverService', () => {
  let service: PhotoresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
