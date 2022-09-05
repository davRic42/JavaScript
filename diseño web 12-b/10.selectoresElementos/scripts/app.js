'use strict';
//seleccionar elementos del DOm
let myTitle = document.getElementById("titulo");
//seleccionar por el name
let tagName= document.getElementsByName("art1");
//seleccion por etiquetica
let etiqueta=document.getElementsByTagName("h3");
//queryselector
let queryTitulo=document.querySelector("#container");
//querySelector Class
let myMenu=document.querySelector(".menu");
//querySelector etiqueta
let myOl=document.querySelector("ol");
//all
let allArt=document.querySelector("article");

//console.log(allArt);
//crear elementos
let miParrafo=document.createElement("p");
miParrafo.id="parrafo";
miParrafo.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta unde ullam velit, aut possimus eos aperiam illo itaque delectus nemo deleniti eum a dolor libero iure maiores earum ab lau"
miParrafo.innerHTML="<h3>esto es otro titulo</h3><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta</strong> unde ullam velit, aut possimus eos aperiam illo itaque delectus nemo deleniti eum a dolor libero iure maiores earum ab laudantium.Distinctio inventore quam nisi officiis voluptatum error hic, sit est sint doloribus aperiam beatae eum nesciunt assumenda nostrum reprehenderit dignissimos nemo saepe?  Corporis, sequi? A corporis nisi minus officia sunt.Neque quisquam voluptate laboriosam sunt? Saepe rerum tempora itaque error non tempore facere, dolorum architecto excepturi, deleniti cum dolorem placeat quibusdam accusamus facilis impedit suscipit sunt quisquam. Officiis, incidunt temporibus."

//Insertar elemento en DOM
document.body.appendChild(miParrafo);
//selecion de elemento
let seleccion=document.getElementById("section1");
seleccion.appendChild(miParrafo);