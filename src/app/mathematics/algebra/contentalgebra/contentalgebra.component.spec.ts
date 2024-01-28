import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentalgebraComponent } from './contentalgebra.component';

describe('ContentalgebraComponent', () => {
  let component: ContentalgebraComponent;
  let fixture: ComponentFixture<ContentalgebraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentalgebraComponent]
    });
    fixture = TestBed.createComponent(ContentalgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
