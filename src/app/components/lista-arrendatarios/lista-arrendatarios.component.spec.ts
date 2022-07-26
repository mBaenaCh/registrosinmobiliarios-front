import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArrendatariosComponent } from './lista-arrendatarios.component';

describe('ListaArrendatariosComponent', () => {
  let component: ListaArrendatariosComponent;
  let fixture: ComponentFixture<ListaArrendatariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArrendatariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArrendatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
