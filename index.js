// * 1 función que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    let randomPoke = Math.floor(Math.random() * 890)
    try{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
  let data = await response.json();
  return data;
    }
    catch(error){
        console.log(`ERROR`)
    }
}


// * 2 fución que retorne el nombre e imagen de un pokemon.
async function getImageAndName(num) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return {
        name: data.name,
        img: data.sprites.front_default,
      };
    } catch (error) {
      console.error(error);
    }
  }



// * 3 fución que retorne el string para pintar imagen y nombre.
async function getImageAndName() {
    const randomPoke = Math.floor(Math.random() * 890);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPoke}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const container = document.querySelector('#container');
      const pokeName = data.name;
      const pokeImg = data['sprites']['other']['dream_world']['front_default'];
      const card = `
        <section>
            <img src="${pokeImg} " alt="${pokeName}">
            <h1>${pokeName} </h1>
        </section>
      `
      container.innerHTML = card;
    
    } catch (error) {
      console.error(error);
    }
  }



// * 4 función que retorne la url de la imagen de un perro aleatorio.
async function getRandomDogImage(){

    const endpoint = `https://dog.ceo/api/breeds/image/random`;

    try{
        const response = await fetch(endpoint);
        const data = await response.json();
        const randomDoggyImg = data.message;
        return randomDoggyImg;
    }
    catch (error){
        console.error(error);
    }
}


// *5 función que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage(){
    const randomPoke = Math.floor(Math.random() * 890);
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomPoke}`;
  try{
    const response = await fetch(endpoint);
    const data = await response.json();
    return data['sprites']['other']['dream_world']['front_default'];
  }
  catch(error){
    console.log(error)
  }
}

// * 7
async function getRandomCharacter (){
  const randomCharacter = Math.floor(Math.random()*20);
  const endpoint = `https://rickandmortyapi.com/api/character`;
  try{
    const response = await fetch(endpoint);
    const data = await response.json();
    return data['info']['results'][randomCharacter];
  }
  catch(error){
    console.log(error)
  }

}

// * 8
async function getRandomCharacterInfo (){
  const randomCharacter = Math.floor(Math.random()*20);
  try{
    const mainEndpoint = `https://rickandmortyapi.com/api/character`;
    const response1 = await fetch(mainEndpoint);
    const dataCharacter = await response1.json();

    const episodeURL = `https://rickandmortyapi.com/api/episode/1`;
    const response2 = await fetch(episodeURL);
    const dataEpisode = await response2.json();

    let character = dataCharacter['info']['results'][randomCharacter];
    let episode = dataEpisode;

    return character['image'], character['name'], character['episode'], episode['name'], episode['air_date'];


  }
  catch(error){
    console.log(error)
  }

}


// *9
async function getRandomCharacterInfo (){
  const randomCharacter = Math.floor(Math.random()*20);
  try{
    const mainEndpoint = `https://rickandmortyapi.com/api/character`;
    const response1 = await fetch(mainEndpoint);
    const dataCharacter = await response1.json();

    const episodeURL = `https://rickandmortyapi.com/api/episode/1`;
    const response2 = await fetch(episodeURL);
    const dataEpisode = await response2.json();

    let character = dataCharacter['info']['results'][randomCharacter];
    let episode = dataEpisode;

    // return character['image'], character['name'], character['episode'], episode['name'], episode['air_date'];
    
      // * pintar la info del personaje en document
    const container = document.querySelector('#container');
    let card = `
    <article>
        <img src="${character['image']}" alt="${character['name']}"><br>
        <h2>${character['name']}</h2>
        <h3>Number of episodes appearances:</h3>
        <p>Episode one: ${episode['name']}</p>
        <p>Other episodes:</p>
        <ul id="episodesList">
        </ul>
    </article>
    `
    container.innerHTML = card;  //* meter la card en el document

    // * Iterar cada episodio del personaje e insertarlo en 
    let episodesAppearances = character['episode'];
    const unList = document.querySelector('#episodesList');
    const list = document.createElement('li');
    unList.innerHTML = list;
    for (let i = 0; i < episodesAppearances.length; i++) {
      list.innerHTML += episodesAppearances[i]
    }
  }
  catch(error){
    console.log(error)
  }

}


