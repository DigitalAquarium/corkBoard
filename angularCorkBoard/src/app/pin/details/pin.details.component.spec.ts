import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDetailsComponent } from './pin.details.component';

describe('DetailsComponent', () => {
  let component: PinDetailsComponent;
  let fixture: ComponentFixture<PinDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinDetailsComponent]
    });
    fixture = TestBed.createComponent(PinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
