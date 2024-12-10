import { TestBed } from '@angular/core/testing';

import { AnyadircategoriaService } from './anyadircategoria.service';

describe('AnyadircategoriaService', () => {
  let service: AnyadircategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyadircategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
