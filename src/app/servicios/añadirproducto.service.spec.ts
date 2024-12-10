import { TestBed } from '@angular/core/testing';

import { AñadirproductoService } from './añadirproducto.service';

describe('AñadirproductoService', () => {
  let service: AñadirproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AñadirproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
