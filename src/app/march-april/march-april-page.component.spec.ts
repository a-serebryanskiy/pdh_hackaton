import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchAprilPageComponent } from './march-april-page.component';

describe('MarchAprilComponent', () => {
  let component: MarchAprilPageComponent;
  let fixture: ComponentFixture<MarchAprilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchAprilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchAprilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
