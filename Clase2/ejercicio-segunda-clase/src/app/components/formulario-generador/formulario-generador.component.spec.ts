import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGeneradorComponent } from './formulario-generador.component';

describe('FormularioGeneradorComponent', () => {
  let component: FormularioGeneradorComponent;
  let fixture: ComponentFixture<FormularioGeneradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioGeneradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioGeneradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
