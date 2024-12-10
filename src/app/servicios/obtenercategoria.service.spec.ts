import { TestBed } from '@angular/core/testing';

import { ObtenercategoriaService } from './obtenercategoria.service';

describe('ObtenercategoriaService', () => {
  let service: ObtenercategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenercategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
