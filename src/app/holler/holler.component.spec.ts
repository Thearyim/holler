import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollerComponent } from './holler.component';

describe('HollerComponent', () => {
  let component: HollerComponent;
  let fixture: ComponentFixture<HollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
