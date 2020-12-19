import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendStabilityComponent } from './legend-stability.component';

describe('LegendStabilityComponent', () => {
  let component: LegendStabilityComponent;
  let fixture: ComponentFixture<LegendStabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendStabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendStabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
