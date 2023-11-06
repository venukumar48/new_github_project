import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoList1Component } from './to-do-list1.component';

describe('ToDoList1Component', () => {
  let component: ToDoList1Component;
  let fixture: ComponentFixture<ToDoList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoList1Component]
    });
    fixture = TestBed.createComponent(ToDoList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
