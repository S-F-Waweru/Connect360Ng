import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDashComponent } from './gov-dash.component';

describe('GovDashComponent', () => {
  let component: GovDashComponent;
  let fixture: ComponentFixture<GovDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
