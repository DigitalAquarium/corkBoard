import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitimageComponent } from './fitimage.component';

describe('FitimageComponent', () => {
  let component: FitimageComponent;
  let fixture: ComponentFixture<FitimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
