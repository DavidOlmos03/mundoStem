import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWrapContainerComponent } from './content-wrap-container.component';

describe('ContentWrapContainerComponent', () => {
  let component: ContentWrapContainerComponent;
  let fixture: ComponentFixture<ContentWrapContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentWrapContainerComponent]
    });
    fixture = TestBed.createComponent(ContentWrapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
