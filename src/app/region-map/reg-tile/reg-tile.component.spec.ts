import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTileComponent } from './reg-tile.component';

describe('RegTileComponent', () => {
  let component: RegTileComponent;
  let fixture: ComponentFixture<RegTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
