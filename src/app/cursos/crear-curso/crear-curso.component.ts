import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit{
  formCurso: FormGroup;
  curso!: Curso;
  edit: boolean = false;

  constructor(private fb: FormBuilder, private cursosService: CursosService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formCurso = this.fb.group({
      clave: [''],
      nombre: [''],
      instructor: [''],
      duracion: [''],
      disponible: [false],
      descripcion: ['']
    });
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    // console.log("params.id", params['id'])

    if (params['id']) {
      
      this.cursosService.obtenerCursosPorId(params['id'])
        .subscribe(
          res => {
            //this.title = "Editar Ancillary"
            this.curso = res;
            this.edit = true;
            // console.log("curso Edit", this.curso)
            this.setFormCurso();
          },
          //err => console.error(err)
        );
    }
  }

  setFormCurso(){
   
    this.formCurso = this.fb.group({
      clave: [this.curso?.clave],
      nombre: [this.curso?.nombre],
      instructor: [this.curso?.instructor],
      duracion: [this.curso?.duracion],
      disponible: [this.curso?.disponible],
      descripcion: [this.curso?.descripcion]
    });
  }
  

  onClick() {
    // console.log('Botón presionado');
    // console.log('this.formCurso', this.formCurso);
    this.curso = {
      nombre: this.formCurso.get('nombre')?.value,
      descripcion: this.formCurso.get('descripcion')?.value,
      instructor: this.formCurso.get('instructor')?.value,
      duracion: this.formCurso.get('duracion')?.value,
      disponible: this.formCurso.get('disponible')?.value,
      clave: this.formCurso.get('clave')?.value,
      imagenUrl: "assets/images/curso.png"
    }
    
    this.cursosService.agregarCurso(this.curso).subscribe(
      (res) => {
        // console.log('Curso guardado con exito', res);
      },
        (error) => {
          // console.error('Error al guardar el curso', error.error);
        }
    );
  }

  editarCurso(){
    const params = this.activatedRoute.snapshot.params;
    this.curso = {
      id: params['id'],
      nombre: this.formCurso.get('nombre')?.value,
      descripcion: this.formCurso.get('descripcion')?.value,
      instructor: this.formCurso.get('instructor')?.value,
      duracion: this.formCurso.get('duracion')?.value,
      disponible: this.formCurso.get('disponible')?.value,
      clave: this.formCurso.get('clave')?.value,
      imagenUrl: "assets/images/curso.png"
    }

    // console.log("curso", this.curso)
    this.cursosService.editarCurso(this.curso).subscribe(
      (res) => {
        this.router.navigate(['/cursos/listar']);
      },
        (error) => {
          // console.error('Error al guardar el curso', error.error);
        }
    );
  }
}
