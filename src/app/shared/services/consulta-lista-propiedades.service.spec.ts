import { TestBed } from '@angular/core/testing';

import { ConsultaListaPropiedadesService } from './consulta-lista-propiedades.service';

describe('ConsultaListaPropiedadesService', () => {
  let service: ConsultaListaPropiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaListaPropiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
