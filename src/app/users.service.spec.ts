import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClientModule]
    });
    service = TestBed.inject(UsersService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  

});
