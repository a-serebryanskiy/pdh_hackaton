import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionSwitchComponent } from './dimension-switch.component';

describe('DimensionSwitchComponent', () => {
  let component: DimensionSwitchComponent;
  let fixture: ComponentFixture<DimensionSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
