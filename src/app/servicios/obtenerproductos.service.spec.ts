import { TestBed } from '@angular/core/testing';

import { ObtenerproductosService } from './obtenerproductos.service';

describe('ObtenerproductosService', () => {
  let service: ObtenerproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
