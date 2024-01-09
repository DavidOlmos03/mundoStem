import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectromagnetismComponent } from './electromagnetism.component';

describe('ElectromagnetismComponent', () => {
  let component: ElectromagnetismComponent;
  let fixture: ComponentFixture<ElectromagnetismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectromagnetismComponent]
    });
    fixture = TestBed.createComponent(ElectromagnetismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
