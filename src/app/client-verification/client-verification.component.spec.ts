import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVerificationComponent } from './client-verification.component';

describe('ClientVerificationComponent', () => {
  let component: ClientVerificationComponent;
  let fixture: ComponentFixture<ClientVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
