import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartillaGeneradaComponent } from './cartilla-generada.component';

describe('CartillaGeneradaComponent', () => {
  let component: CartillaGeneradaComponent;
  let fixture: ComponentFixture<CartillaGeneradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartillaGeneradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartillaGeneradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
