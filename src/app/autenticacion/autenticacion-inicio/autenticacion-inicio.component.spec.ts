import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionInicioComponent } from './autenticacion-inicio.component';

describe('AutenticacionInicioComponent', () => {
  let component: AutenticacionInicioComponent;
  let fixture: ComponentFixture<AutenticacionInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticacionInicioComponent]
    });
    fixture = TestBed.createComponent(AutenticacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
