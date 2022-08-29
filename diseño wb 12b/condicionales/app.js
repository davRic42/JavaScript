'use strict';
let num3=55;
let num4=12;
if(num3> num4){
   console.log("entre");       
}
else{
    if(num3%5===0){
        console.log("multiplo de 5");
    }
}

//condicional ternario

let respuesta=(num4>=10) ? "num4 es mayor que 10" : "no es amyor que 10";
console.log(respuesta);
//switch
let opcion= 4;
switch(opcion){
    case 1:
        console.log("opcion1");
        break;
    case 2:
        console.log("opcion 2");
    case 3:
        console.log("opcion 3");
}


