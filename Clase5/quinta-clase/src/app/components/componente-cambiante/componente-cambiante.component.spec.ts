import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCambianteComponent } from './componente-cambiante.component';

describe('ComponenteCambianteComponent', () => {
  let component: ComponenteCambianteComponent;
  let fixture: ComponentFixture<ComponenteCambianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCambianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCambianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
