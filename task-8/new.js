let pokemons=[];
let search_pokemon=[];
const poke_container=document.getElementById("poke_container");
const url="https://pokeapi.co/api/v2/pokemon";
const pokemons_number=250;
const search=document.getElementById("search");
const form=document.getElementById("form");
let i=1;
const fetchPokemons = async() => {
    while(i<=pokemons_number) {
        await getAllPokemon(i);
        i++;
    }
    pokemons.forEach((pokemon)=>createPokemonCard(pokemon));
};
const removePokemon=()=>{
    const pokemonEls=document.getElementsByClassName("pokemon");
    let removablePokemons=[];
    for (let i=1; i<=removablePokemons.length();i++)
    {
        const pokemonEl=pokemonEls[i];
        removablePokemons=[...removePokemon,pokemonEl];
    }
    removablePokemons.forEach((remPoke)=>remPoke.remove());
};

const getAllPokemon = async(id)=>{
    const res= await fetch(`${url}/${id}`);
    const pokemon=await res.json();
    pokemons=[...pokemons,pokemon];
};
fetchPokemons();
function createPokemonCard(pokemon){
    console.log(pokemon);
    const pokemonel=document.createElement("div");
    pokemonel.classList.add("pokemon");
    const poke_types=pokemon.types.map((el) => el.type.name).slice(0,1);
    const poke_names=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const poke_stats= pokemon.stats.map((el)=>el.stat.name);
    const stats=poke_stats.slice(0,3);
    const base_value=pokemon.stats.map((el)=>el.base_stat);
    const base_stat=base_value.slice(0,3);
    const stat=stats.map((stat)=>{
        return `<li class="names">${stat}</li>`;
    }).join("");
    const base=base_stat.map((base)=>{
        return `<li class="base">${base}</li>`;
    }).join("");
    const pokeInnerhtml=`<div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
    </div>
    <div class="info">
    <span class="number">#${pokemon.id.toString()}</span>
    <h3 class="name">${poke_names}</h3>
    <small class="type"><span>${poke_types}</span></small>
    </div>
    <div class="stats">
    <h2>stats</h2>
    <div class="flex">
    <ul>${stat}</ul>
    <ul>${base}</ul>
    </div>
    </div>`;
    pokemonel.innerHTML=pokeInnerhtml;
    poke_container.appendChild(pokemonel);
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let searchItem=search.value;
    if(searchItem){
        let searchPokemons=pokemons.filter((poke)=>poke.name===searchItem);
        while (poke_container.firstChild) {
            poke_container.removeChild(poke_container.lastChild);
          }
        searchPokemons.forEach((pokemon)=>createPokemonCard(pokemon));
        search.value="";
    }
    else if(searchItem === ""){
        pokemons=[];
        fetchPokemons();
    }
});