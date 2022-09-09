'use strict';
const form =document.getElementById('form');
const btn =document.getElementById('btnDatos');
const names =document.getElementById('inputNames');
const age =document.getElementById('inputAge');
const email =document.getElementById('inputEmail');
const city =document.getElementById('inputCity');
const policy =document.getElementById('checkPolitica');
//control de validacion

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validForm()){
        alert('Enviando el formulario');
    }
    else{
        alert('Error en valores del formulario');
    }
})

const validForm=()=>{
    const values=Object.values(objectValid);
    let reponse=values.findIndex(e=> e ===false);
    return reponse;
};

const objectValid={
    nombres: false,
    edad:false,
    correo:false,
    ciudad:false,
    politica:false
};

names.addEventListener('change',(e /*evento*/)=>{
    console.log(e.target);
    const namesRegex=/^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorRegex=e.target.value;
    objectValid.nombres=valorRegex.match(namesRegex)?true:false;
    console.log(Object.values(objectValid));
});

age.addEventListener('change',function(e){
    const ageRegex=/(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex))&&((parseInt(age.value))>=18)){
        objectValid.edad=true;
    }
    else{
        objectValid.edad=false;
    }
    console.log(Object.values(objectValid));
});

policy.addEventListener('change',(e)=>{
    objectValid.politica =e.target.checked===true?true:false;
    console.log(Object.values(objectValid));
});

email.addEventListener('change',(e /*evento*/)=>{
    console.log(e.target.value);
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/;
    let valorRegex=e.target.value;
    objectValid.correo=valorRegex.match(emailRegex)?true:false;
    console.log(Object.values(objectValid));
});
city.addEventListener('change',(e)=>{
    objectValid.ciudad =e.target.select===true?true:false;
    console.log(Object.values(objectValid));
});