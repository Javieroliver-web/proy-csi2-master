import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArticulo } from './detalle-articulo';

describe('DetalleArticulo', () => {
  let component: DetalleArticulo;
  let fixture: ComponentFixture<DetalleArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
