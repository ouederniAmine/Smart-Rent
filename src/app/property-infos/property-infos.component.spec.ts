import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInfosComponent } from './property-infos.component';

describe('PropertyInfosComponent', () => {
  let component: PropertyInfosComponent;
  let fixture: ComponentFixture<PropertyInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
