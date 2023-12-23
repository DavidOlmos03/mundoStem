import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralContainerComponent } from './lateral-container.component';

describe('LateralContainerComponent', () => {
  let component: LateralContainerComponent;
  let fixture: ComponentFixture<LateralContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateralContainerComponent]
    });
    fixture = TestBed.createComponent(LateralContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
