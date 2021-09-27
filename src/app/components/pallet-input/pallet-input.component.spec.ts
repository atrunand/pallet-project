import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletInputComponent } from './pallet-input.component';

describe('PalletInputComponent', () => {
  let component: PalletInputComponent;
  let fixture: ComponentFixture<PalletInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
