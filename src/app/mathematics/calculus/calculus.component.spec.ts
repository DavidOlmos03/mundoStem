import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculusComponent } from './calculus.component';

describe('CalculusComponent', () => {
  let component: CalculusComponent;
  let fixture: ComponentFixture<CalculusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculusComponent]
    });
    fixture = TestBed.createComponent(CalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
