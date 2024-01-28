import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationproComponent } from './motivationpro.component';

describe('MotivationproComponent', () => {
  let component: MotivationproComponent;
  let fixture: ComponentFixture<MotivationproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivationproComponent]
    });
    fixture = TestBed.createComponent(MotivationproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
