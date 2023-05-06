import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportscardsComponent } from './sportscards.component';

describe('SportscardsComponent', () => {
  let component: SportscardsComponent;
  let fixture: ComponentFixture<SportscardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportscardsComponent]
    });
    fixture = TestBed.createComponent(SportscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
