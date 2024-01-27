import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraniComponent } from './brani.component';

describe('BraniComponent', () => {
  let component: BraniComponent;
  let fixture: ComponentFixture<BraniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BraniComponent]
    });
    fixture = TestBed.createComponent(BraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
