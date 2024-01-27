import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderinfComponent } from './headerinf.component';

describe('HeaderinfComponent', () => {
  let component: HeaderinfComponent;
  let fixture: ComponentFixture<HeaderinfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderinfComponent]
    });
    fixture = TestBed.createComponent(HeaderinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
