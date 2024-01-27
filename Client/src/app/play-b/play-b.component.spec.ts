import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBComponent } from './play-b.component';

describe('PlayBComponent', () => {
  let component: PlayBComponent;
  let fixture: ComponentFixture<PlayBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayBComponent]
    });
    fixture = TestBed.createComponent(PlayBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
