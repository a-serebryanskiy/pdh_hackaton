import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendVulnerableComponent } from './legend-vulnerable.component';

describe('LegendVulnerableComponent', () => {
  let component: LegendVulnerableComponent;
  let fixture: ComponentFixture<LegendVulnerableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendVulnerableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendVulnerableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
