import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticsegurityComponent } from './informaticsegurity.component';

describe('InformaticsegurityComponent', () => {
  let component: InformaticsegurityComponent;
  let fixture: ComponentFixture<InformaticsegurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformaticsegurityComponent]
    });
    fixture = TestBed.createComponent(InformaticsegurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
