import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcalComponent } from './contentcal.component';

describe('ContentcalComponent', () => {
  let component: ContentcalComponent;
  let fixture: ComponentFixture<ContentcalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentcalComponent]
    });
    fixture = TestBed.createComponent(ContentcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
