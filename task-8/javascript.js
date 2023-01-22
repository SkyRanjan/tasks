console.log("HELLO WORLD");
const fetchPokeman = () => {
    const url='https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
        .then(res => {
            return res.json();
        })
        //extracting the data in the pokemon object
        .then(data =>{
            console.log(data);
            const pokemon={};
            pokemon['name']=data.name;
            pokemon['id']=data.id;
            pokemon['image']=result.sprites['front_default'];
            console.log(pokemon);
        })
};
fetchPokeman();