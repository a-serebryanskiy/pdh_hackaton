import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendMarchAprilComponent } from './legend-march-april.component';

describe('LegendMarchAprilComponent', () => {
  let component: LegendMarchAprilComponent;
  let fixture: ComponentFixture<LegendMarchAprilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendMarchAprilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendMarchAprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
