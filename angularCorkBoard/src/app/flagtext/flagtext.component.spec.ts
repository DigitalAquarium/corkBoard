import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagtextComponent } from './flagtext.component';

describe('FlagtextComponent', () => {
  let component: FlagtextComponent;
  let fixture: ComponentFixture<FlagtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
