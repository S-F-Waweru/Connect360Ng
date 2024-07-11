import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateViewsComponent } from './update-views.component';

describe('UpdateViewsComponent', () => {
  let component: UpdateViewsComponent;
  let fixture: ComponentFixture<UpdateViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
