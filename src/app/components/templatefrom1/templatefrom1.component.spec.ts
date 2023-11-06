import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatefrom1Component } from './templatefrom1.component';

describe('Templatefrom1Component', () => {
  let component: Templatefrom1Component;
  let fixture: ComponentFixture<Templatefrom1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Templatefrom1Component]
    });
    fixture = TestBed.createComponent(Templatefrom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
