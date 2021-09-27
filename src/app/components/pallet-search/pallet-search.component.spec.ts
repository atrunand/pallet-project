import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletSearchComponent } from './pallet-search.component';

describe('PalletSearchComponent', () => {
  let component: PalletSearchComponent;
  let fixture: ComponentFixture<PalletSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
