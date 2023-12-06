import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCursosComponent } from './asignar-cursos.component';

describe('AsignarCursosComponent', () => {
  let component: AsignarCursosComponent;
  let fixture: ComponentFixture<AsignarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarCursosComponent]
    });
    fixture = TestBed.createComponent(AsignarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
