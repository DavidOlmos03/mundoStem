import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentblogComponent } from './contentblog.component';

describe('ContentblogComponent', () => {
  let component: ContentblogComponent;
  let fixture: ComponentFixture<ContentblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentblogComponent]
    });
    fixture = TestBed.createComponent(ContentblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
