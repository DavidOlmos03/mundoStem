import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmoComponent } from './contentmo.component';

describe('ContentmoComponent', () => {
  let component: ContentmoComponent;
  let fixture: ComponentFixture<ContentmoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentmoComponent]
    });
    fixture = TestBed.createComponent(ContentmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
