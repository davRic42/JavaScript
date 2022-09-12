

async function getPokemons(){
    const resp=await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((reponse)=>{
        console.log(reponse.data.results);
    })
    .catch((err)=>{
        console.log(err);
    });
    return resp;
}
getPokemons();
console.log("esto es despues de la peticion");