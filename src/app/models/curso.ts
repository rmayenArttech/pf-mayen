import { Profesor } from "./profesor";

export interface Curso{
    nombre: string,
    descripcion: string,
    instructor: string,
    duracion: string,
    disponible: boolean,
    clave: string,
    id?: string,
    imagenUrl?: string
}
