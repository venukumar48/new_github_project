import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo1Component } from './observable-demo1.component';

describe('ObservableDemo1Component', () => {
  let component: ObservableDemo1Component;
  let fixture: ComponentFixture<ObservableDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableDemo1Component]
    });
    fixture = TestBed.createComponent(ObservableDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
