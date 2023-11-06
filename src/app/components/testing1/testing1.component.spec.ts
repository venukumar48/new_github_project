import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing1Component } from './testing1.component';

describe('Testing1Component', () => {
  let component: Testing1Component;
  let fixture: ComponentFixture<Testing1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Testing1Component]
    });
    fixture = TestBed.createComponent(Testing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create addition test', () => {
    expect(component).toBeTruthy();
    expect(component.adddition(2,3)).toBe(5);
  });
  it('should create subtraction test', () => {
    expect(component).toBeTruthy();
    expect(component.subtraction(2,1)).toBe(1);
  });
});
