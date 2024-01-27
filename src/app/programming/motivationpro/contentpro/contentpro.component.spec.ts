/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentproComponent } from './contentpro.component';

describe('ContentproComponent', () => {
  let component: ContentproComponent;
  let fixture: ComponentFixture<ContentproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
