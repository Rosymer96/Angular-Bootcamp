import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeInterpolationComponent } from './practice-interpolation.component';

describe('PracticeInterpolationComponent', () => {
  let component: PracticeInterpolationComponent;
  let fixture: ComponentFixture<PracticeInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
