import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletTopBarComponent } from './pallet-top-bar.component';

describe('PalletTopBarComponent', () => {
  let component: PalletTopBarComponent;
  let fixture: ComponentFixture<PalletTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
