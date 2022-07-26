import { TestBed } from '@angular/core/testing';

import { ConsultaArrendatariosService } from './consulta-arrendatarios.service';

describe('ConsultaArrendatariosService', () => {
  let service: ConsultaArrendatariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaArrendatariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
