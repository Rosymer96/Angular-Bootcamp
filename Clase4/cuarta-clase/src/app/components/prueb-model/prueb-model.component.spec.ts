import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebModelComponent } from './prueb-model.component';

describe('PruebModelComponent', () => {
  let component: PruebModelComponent;
  let fixture: ComponentFixture<PruebModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
