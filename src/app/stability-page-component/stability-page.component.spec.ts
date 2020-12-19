import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabilityPageComponent } from './stability-page.component';

describe('StabilityPageComponentComponent', () => {
  let component: StabilityPageComponent;
  let fixture: ComponentFixture<StabilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StabilityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StabilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
