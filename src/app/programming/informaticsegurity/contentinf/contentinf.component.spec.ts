import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentinfComponent } from './contentinf.component';

describe('ContentinfComponent', () => {
  let component: ContentinfComponent;
  let fixture: ComponentFixture<ContentinfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentinfComponent]
    });
    fixture = TestBed.createComponent(ContentinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
