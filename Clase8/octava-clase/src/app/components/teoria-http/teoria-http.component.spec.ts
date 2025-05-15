import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaHttpComponent } from './teoria-http.component';

describe('TeoriaHttpComponent', () => {
  let component: TeoriaHttpComponent;
  let fixture: ComponentFixture<TeoriaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoriaHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoriaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
