import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsMapComponent } from './regions-map.component';

describe('AccidentsMapComponent', () => {
  let component: RegionsMapComponent;
  let fixture: ComponentFixture<RegionsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
