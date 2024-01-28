import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercalComponent } from './headercal.component';

describe('HeadercalComponent', () => {
  let component: HeadercalComponent;
  let fixture: ComponentFixture<HeadercalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadercalComponent]
    });
    fixture = TestBed.createComponent(HeadercalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
