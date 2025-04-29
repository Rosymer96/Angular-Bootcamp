import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCalculadoraComponent } from './ejercicio-calculadora.component';

describe('EjercicioCalculadoraComponent', () => {
  let component: EjercicioCalculadoraComponent;
  let fixture: ComponentFixture<EjercicioCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
