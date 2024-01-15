import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationalComponent } from './computational.component';

describe('ComputationalComponent', () => {
  let component: ComputationalComponent;
  let fixture: ComponentFixture<ComputationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputationalComponent]
    });
    fixture = TestBed.createComponent(ComputationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
