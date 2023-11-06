import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from 'src/app/users.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userservice:UsersService;

  beforeEach(async() => {
   TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [UsersService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([UsersService],(s:UsersService)=>{
    userservice=s;
   fixture=TestBed.createComponent(UsersComponent);
   component=fixture.componentInstance;
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
fit('should create addition', () => {
    expect(component.addition(2,3)).toBe(5);
  });

fit('users creation is done',()=>{

let response:any[]=[{},{}];
spyOn(userservice,'FetchAllusers').and.returnValue(of(response));
component.fetchUsers();
fixture.detectChanges();
expect(component.users.length).toBe(2);
  })


});
