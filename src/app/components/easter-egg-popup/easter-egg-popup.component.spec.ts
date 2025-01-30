import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEggPopupComponent } from './easter-egg-popup.component';

describe('EasterEggPopupComponent', () => {
  let component: EasterEggPopupComponent;
  let fixture: ComponentFixture<EasterEggPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasterEggPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterEggPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
