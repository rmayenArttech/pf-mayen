# PFMayen
Proyecto Final - Raymundo Mayen Ortiz

# Servicios Web - API
Los servicios web simulados para el proyecto se realizaron utilizando json-server

Los modelos de API se encuentran en el archivo "db.json" incluido en el directorio PF-MAYEN

Comando para iniciar servidor json-server para utilizar los ws
json-server --watch db.json

Es importante que json-server se ejecute en el puerto 3000 ya que en la configuracion para el consumo de los ws se usa el puerto 3000

Los endpoints dummy son:

WS CRUD para Alumnos

-Listar alumnos
get: http://localhost:3000/alumnos

-Nuevo alumno
post: http://localhost:3000/alumnos/
body:
{
      "nombre": "string",
      "apellido_paterno": "string",
      "apellido_materno": "string",
      "matricula": "string",
      "cursos": [""]
}

-Editar alumno
put: http://localhost:3000/alumnos/{id}
body:
{
      "nombre": "string",
      "apellido_paterno": "string",
      "apellido_materno": "string",
      "matricula": "string",
      "cursos": [""]
}

-Borra alumno
delete: http://localhost:3000/alumnos/{id}


WS CRUD para Cursos
http://localhost:3000/cursos

-Listar Curso
get: http://localhost:3000/cursos

-Nuevo Curso
post: http://localhost:3000/cursos
body:
{
    "nombre": "string",
    "clave": "string",
    "descripcion": "string",
    "instructor": "string",
    "duracion": "string",
    "disponible": boolean,
    "imagenUrl": "string"
}

-Editar Curso
put: http://localhost:3000/cursos/{id}
body:
{
    "nombre": "string",
    "clave": "string",
    "descripcion": "string",
    "instructor": "string",
    "duracion": "string",
    "disponible": boolean,
    "imagenUrl": "string"
}

-Eliminar Curso
delete: http://localhost:3000/cursos/{id}


# Ejecutar Apliccacion

una vez iniciado json-server ejecutar la aplicacion de forma local con el comando:

ng serve

el comando iniciara la aplicacion en el puerto por default 4200


# Documentacion

https://docs.google.com/document/d/1ZNsn4CqrR0QS6lpIN_RIitD6P0WFLYDLEncmMCa3lFM/edit?usp=sharing
