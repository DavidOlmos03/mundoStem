import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadervecComponent } from './headervec.component';

describe('HeadervecComponent', () => {
  let component: HeadervecComponent;
  let fixture: ComponentFixture<HeadervecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadervecComponent]
    });
    fixture = TestBed.createComponent(HeadervecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
