'use strict';
let cadena = "enero-febrero-marzo-abril-mayo-junio-julio";
//metodo split
let resultArray= cadena.split('-');
//console.log(resultArray);
//metodo find
const myArray1 =[2,4,6,6,true,3.56,'maria',800];
let result= myArray1.find((e)=>e===true);
//console.log(result);

//metodo findIndex
result=myArray1.findIndex((e)=>e==='maria')

//metodo filter
result=myArray1.filter((e)=>e%2===0);
console.log(result);
