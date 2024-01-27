import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderalgebraComponent } from './headeralgebra.component';

describe('HeaderalgebraComponent', () => {
  let component: HeaderalgebraComponent;
  let fixture: ComponentFixture<HeaderalgebraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderalgebraComponent]
    });
    fixture = TestBed.createComponent(HeaderalgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
