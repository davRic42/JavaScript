'use strict';
let cadJSON={'nombre':'Juan Andres'};
//[]-> arrreglo; {}-> objeto

let datos=[
    {
        "nombres":"Juan andres",
        "apellidos":"Vargas Solano",
        "edad":34,
        "materias":["logica","programacion","matematicas"]
    },
    {
        "nombres":"mario",
        "apellidos":"Marquez",
        "materias":["logica","programacion","matematicas"]

    }
];

Object.entries(datos).forEach((e)=>console.log(e))
//fetch es un api para realizar api peticiones y solicitudesy peticiones.

