import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerablePageComponent } from './vulnerable-page.component';

describe('VulnerablePageComponent', () => {
  let component: VulnerablePageComponent;
  let fixture: ComponentFixture<VulnerablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VulnerablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
