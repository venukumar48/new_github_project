import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivemessageComponent } from './recivemessage.component';

describe('RecivemessageComponent', () => {
  let component: RecivemessageComponent;
  let fixture: ComponentFixture<RecivemessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivemessageComponent]
    });
    fixture = TestBed.createComponent(RecivemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
