import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViewsComponent } from './add-views.component';

describe('AddViewsComponent', () => {
  let component: AddViewsComponent;
  let fixture: ComponentFixture<AddViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
