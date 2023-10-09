import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservicesComponent } from './myservices.component';

describe('MyservicesComponent', () => {
  let component: MyservicesComponent;
  let fixture: ComponentFixture<MyservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyservicesComponent]
    });
    fixture = TestBed.createComponent(MyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
