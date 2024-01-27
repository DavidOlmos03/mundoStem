import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorgeometryComponent } from './vectorgeometry.component';

describe('VectorgeometryComponent', () => {
  let component: VectorgeometryComponent;
  let fixture: ComponentFixture<VectorgeometryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VectorgeometryComponent]
    });
    fixture = TestBed.createComponent(VectorgeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
