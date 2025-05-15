import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsHttpComponent } from './cats-http.component';

describe('CatsHttpComponent', () => {
  let component: CatsHttpComponent;
  let fixture: ComponentFixture<CatsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
