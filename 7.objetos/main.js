'use strict';

//objeto literal en JS
//modificadores de acceso: public private y protected
/**
 * pilares de la programacion orientada a objetos
 * polimosfirsmo: mismo metodo muchas formas 
 * encapsulmiento
 * abstraccion: UML
 * herencia: pasar atributos y metedos de a otras clases
 * JSON= objeto literal de JS
 */
let myObject={
    nombres:'Felix',
    apellidos: 'Ruiz',
    edad: 10,
    genero: 'masculino'

}
//console.log(myObject.nombres);
//console.log(myObject);

//iterar objeto

//Object.entries(myObject).forEach((e)=> console.log(e));
//Object.entries(myObject).forEach((key,value)=> console.log(key,value));
//Object.entries(myObject).forEach((key)=> console.log(key));


/**SO ... operador de propagacion */
const myArray1 =[2,4,6,6,true,3.56,'maria',800];
console.log(...myArray1);
