import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermoComponent } from './headermo.component';

describe('HeadermoComponent', () => {
  let component: HeadermoComponent;
  let fixture: ComponentFixture<HeadermoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadermoComponent]
    });
    fixture = TestBed.createComponent(HeadermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
