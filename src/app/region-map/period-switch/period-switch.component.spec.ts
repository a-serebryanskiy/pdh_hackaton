import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodSwitchComponent } from './period-switch.component';

describe('PeriodSwitchComponent', () => {
  let component: PeriodSwitchComponent;
  let fixture: ComponentFixture<PeriodSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
