import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionInfoDialogComponent } from './region-info-dialog.component';

describe('RegionInfoDialogComponent', () => {
  let component: RegionInfoDialogComponent;
  let fixture: ComponentFixture<RegionInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
