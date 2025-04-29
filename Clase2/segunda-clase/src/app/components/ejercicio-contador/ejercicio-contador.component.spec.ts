import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioContadorComponent } from './ejercicio-contador.component';

describe('EjercicioContadorComponent', () => {
  let component: EjercicioContadorComponent;
  let fixture: ComponentFixture<EjercicioContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioContadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
