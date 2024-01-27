import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerblogComponent } from './programmerblog.component';

describe('ProgrammerblogComponent', () => {
  let component: ProgrammerblogComponent;
  let fixture: ComponentFixture<ProgrammerblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammerblogComponent]
    });
    fixture = TestBed.createComponent(ProgrammerblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
