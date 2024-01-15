import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMechanicsComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderMechanicsComponent;
  let fixture: ComponentFixture<HeaderMechanicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMechanicsComponent]
    });
    fixture = TestBed.createComponent(HeaderMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
