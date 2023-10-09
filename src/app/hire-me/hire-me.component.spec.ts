import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeComponent } from './hire-me.component';

describe('HireMeComponent', () => {
  let component: HireMeComponent;
  let fixture: ComponentFixture<HireMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireMeComponent]
    });
    fixture = TestBed.createComponent(HireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
