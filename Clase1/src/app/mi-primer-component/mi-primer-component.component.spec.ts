import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrimerComponentComponent } from './mi-primer-component.component';

describe('MiPrimerComponentComponent', () => {
  let component: MiPrimerComponentComponent;
  let fixture: ComponentFixture<MiPrimerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPrimerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPrimerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
