'use strict';

const myArray1 =[2,4,6,6,true,3.56,'maria',800];
let myArray2=new Array('a','e','i','o','u'); //new objetos

//declaracion de arreglos
console.log(myArray1[6]);
console.log(myArray2[3]);

/**iteracion de arreglos 
 * for in, for of, foreach
*/
for(let i of myArray1){
    console.log(i);
}

for(let  j in myArray1){
    console.log(j);
}

for(let k=0;k<myArray1.length;k++){
    console.log(myArray1[k])
}
//length es para leer el tamaño del arreglo
myArray2.forEach(element => {
    console.log(element); 
});