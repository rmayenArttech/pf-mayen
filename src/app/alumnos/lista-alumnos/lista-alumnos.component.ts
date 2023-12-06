import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../services/alumnos.service';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnosLista!: Alumno[]
  alumnosListaTmp!: Alumno[]
  editElementIndex: number = -1;

  formEditFG!: FormGroup;
  formFG!: FormGroup;

  filter: boolean = false;

  alumnoEditRQ = {
    "id": "",
    "nombre": "",
    "apellido_paterno": "",
    "apellido_materno": "",
    "matricula": "",
    "cursos": [""]
  }

  alumnoRQ: Alumno = {
    "nombre": "",
    "apellido_paterno": "",
    "apellido_materno": "",
    "matricula": "",
    "cursos": [""],
  }

  agregarFila: boolean = false

  columnas = ['matricula', 'nombre', 'apellidoPaterno', 'apellidoMaterno'];
  constructor(private alumnosService: AlumnosService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.alumnosService.obtenerAlumnos()
      .subscribe(
        res => {
          //this.title = "Editar Ancillary"
          this.alumnosLista = res;
          this.alumnosListaTmp = this.alumnosLista;

          //console.log("alumnosLista", this.alumnosLista)
        },
        //err => console.error(err)
      );

    this.formEditFG = this.fb.group({
      nombre: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', [Validators.required, Validators.max(100)]]
    });

    this.formFG = this.fb.group({
      matricula: ['', Validators.required],
      nombre: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', [Validators.required, Validators.max(100)]],
      cursos: [[''], Validators.required]
    });
  }

  search(event: Event, searchField: string): void {
    //let searchTerm = (event.target as HTMLInputElement).value;

    const inputElementMatricula = document.getElementById("search-input-matricula") as HTMLInputElement; // Obtiene el elemento por matricula
    const searchTermMatricula = inputElementMatricula.value; // Obtiene el valor del input

    const inputElementNombre = document.getElementById("search-input-nombre") as HTMLInputElement; // Obtiene el elemento por matricula
    const searchTermNombre = inputElementNombre.value; // Obtiene el valor del input

    const inputElementApaterno = document.getElementById("search-input-apaterno") as HTMLInputElement; // Obtiene el elemento por apaterno
    const searchTermApaterno = inputElementApaterno.value; // Obtiene el valor del input

    const inputElementAmaterno = document.getElementById("search-input-amaterno") as HTMLInputElement; // Obtiene el elemento por amaterno
    const searchTermAmaterno = inputElementAmaterno.value; // Obtiene el valor del input

    if (searchTermMatricula.length > 0 || searchTermNombre.length > 0 || searchTermApaterno.length > 0 || searchTermAmaterno.length > 0) {
      this.filter = true;
    } else {
      this.filter = false;
    }

    this.alumnosLista = this.alumnosListaTmp;
    this.alumnosLista = this.alumnosLista.filter((item: any) => {
      return (item.matricula ? item.matricula.includes(searchTermMatricula) : true) &&
        (item.nombre ? item.nombre.toLowerCase().includes(searchTermNombre.toLowerCase()) : true) &&
        (item.apellido_paterno ? item.apellido_pigualaterno.toLowerCase().includes(searchTermApaterno.toLowerCase()) : true) &&
        (item.apellido_materno ? item.apellido_materno.toLowerCase().includes(searchTermAmaterno.toLowerCase()) : true)

    }
    );
  }

  editElementIndexs(data: any, index: number) {

    this.editElementIndex = index;

    this.formEditFG = this.fb.group({
      nombre: [data.nombre, Validators.required],
      apaterno: [data.apellido_paterno, Validators.required],
      amaterno: [data.apellido_materno, Validators.required]
    });
    // console.log("this.editElementIndex", this.editElementIndex)
    // console.log("this.formEditFG", this.formEditFG)
  }

  save(data: any, index: number) {
    this.editElementIndex = -1;

    // console.log("data", data)

    this.alumnoEditRQ = {
      "id": data.id.toString(),
      "nombre": this.formEditFG.get('nombre')!.value,
      "apellido_paterno": this.formEditFG.get('apaterno')!.value,
      "apellido_materno": this.formEditFG.get('amaterno')!.value,
      "matricula": data.matricula,
      "cursos": data.cursos
    }

    // console.log("this.alumnoEditRQ", this.alumnoEditRQ)

    this.alumnosService.editarAlumno(this.alumnoEditRQ).subscribe(
      res => {
        // console.log("status nuevo ", res);
        let status = res
        this.ngOnInit();

      }
    );
  }

  cancel() {
    this.editElementIndex = -1;
  }

  eliminarAlumno(id: string) {
    this.alumnosService.eliminarAlumno(id).subscribe(
      res => {
        this.ngOnInit();
      }
    );
  }

  nuevaFila() {
    this.agregarFila = true;
  }

  cancelarFila() {
    this.agregarFila = false;
  }

  agregarAlumno() {

    // console.log("this.formFG", this.formFG)
    this.alumnoRQ = {
      "nombre": this.formFG.get('nombre')!.value,
      "apellido_paterno": this.formFG.get('apaterno')!.value,
      "apellido_materno": this.formFG.get('amaterno')!.value,
      "matricula": this.formFG.get('matricula')!.value,
      "cursos": ['']
    }

    // console.log("this.alumnoRQ", this.alumnoRQ)
    this.alumnosService.agregarAlumno(this.alumnoRQ).subscribe(
      res => {
        this.agregarFila = false;
        this.ngOnInit();
      }
    );

  }

}
