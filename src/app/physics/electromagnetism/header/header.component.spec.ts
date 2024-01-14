import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElectromagnetismComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderElectromagnetismComponent;
  let fixture: ComponentFixture<HeaderElectromagnetismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderElectromagnetismComponent]
    });
    fixture = TestBed.createComponent(HeaderElectromagnetismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
