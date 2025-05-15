import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoListadoComponent } from './elemento-listado.component';

describe('ElementoListadoComponent', () => {
  let component: ElementoListadoComponent;
  let fixture: ComponentFixture<ElementoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
