import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArticulo2Component } from './detalle-articulo2.component';

describe('DetalleArticulo2Component', () => {
  let component: DetalleArticulo2Component;
  let fixture: ComponentFixture<DetalleArticulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArticulo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleArticulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
