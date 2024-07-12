import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenDashComponent } from './citizen-dash.component';

describe('CitizenDashComponent', () => {
  let component: CitizenDashComponent;
  let fixture: ComponentFixture<CitizenDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
