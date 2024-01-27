import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationmathComponent } from './motivationmath.component';

describe('MotivationmathComponent', () => {
  let component: MotivationmathComponent;
  let fixture: ComponentFixture<MotivationmathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivationmathComponent]
    });
    fixture = TestBed.createComponent(MotivationmathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
