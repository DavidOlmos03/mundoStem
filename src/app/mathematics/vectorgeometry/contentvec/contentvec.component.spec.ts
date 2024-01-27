import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentvecComponent } from './contentvec.component';

describe('ContentvecComponent', () => {
  let component: ContentvecComponent;
  let fixture: ComponentFixture<ContentvecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentvecComponent]
    });
    fixture = TestBed.createComponent(ContentvecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
