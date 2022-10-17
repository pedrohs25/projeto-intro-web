const nome = 'pikachu';
const tipo = 'Eletrico';
const numeroPokedex = 25;
const consegueEvoluir = true;
const tiposDeAtaque = ["Ataque Rápido", "Investida Trovão", "Cauda de Ferro", "Choque do Trovão"];

const nome1 = 'Pidgey';
const tipo1 = 'Normal e Vôo';
const numeroPokedex1 = 16;
const consegueEvoluir1 = true;
const tiposDeAtaque1 = ["Bicada", "Ventania", "Ataque Rápido", "Ataque de Asa"];

const nome2 = 'Charmander';
const tipo2 = 'Fogo';
const numeroPokedex2 = 04;
const consegueEvoluir2 = true;
const tiposDeAtaque2 = ["Rosnar","Presas de Fogo", "Garras de Metal", "Lança-Chamas"];

const nome3 = 'Bulbasaur';
const tipo3 = 'Grama e Tóxico';
const numeroPokedex3 = 01;
const consegueEvoluir3 = true;
const tiposDeAtaque3 = ["Folhas de Navalha", "Cavar", "Chicotes de Vinha", "Esfera de Energia"];

const nome4 = 'Eevee';
const tipo4 = 'Normal';
const numeroPokedex4 = 133;
const consegueEvoluir4 = true;
const tiposDeAtaque4 = ["Ataque Rápido", "Investida", "Golpe Baixo", "Proteção"];

const mediajunta = Number(numeroPokedex + numeroPokedex1 + numeroPokedex2 + numeroPokedex3 + numeroPokedex4) / 4

console.log("media", mediajunta);

const verificapokemons = consegueEvoluir && consegueEvoluir1 && consegueEvoluir2 && consegueEvoluir3 && consegueEvoluir4;
console.log("verificação", verificapokemons);

const pokemon0 = {
   nomePokemon: 'Pikachu',
   tipo: 'Eletrico',
   numeroPokedex: 25,
   consegueEvoluir: true,
   tiposDeAtaque: ["Ataque Rápido", "Investida Trovão", "Cauda de Ferro", "Choque do Trovão"],
   img: "./img/pikachu.png",
   href: 'https://www.pokemon.com/br/pokedex/pikachu',
   card: 'card'
}

const pokemon1 = {
   nomePokemon: 'Pidgey',
   tipo: 'Normal e Vôo',
   numeroPokedex: 16,
   consegueEvoluir: true,
   tiposDeAtaque: ["Bicada", "Ventania", "Ataque Rápido", "Ataque de Asa"],
   img: "./img/Pidgey.png",
   href: 'https://www.pokemon.com/br/pokedex/pidgey',
   card: 'card2'
}

const pokemon2 = {
   nomePokemon: 'Charmander',
   tipo: 'Fogo',
   numeroPokedex: 04,
   consegueEvoluir: true,
   tiposDeAtaque: ["Rosnar","Presas de Fogo", "Garras de Metal", "Lança-Chamas"],
   img: "./img/charmander.png",
   href: 'https://www.pokemon.com/br/pokedex/charmander',
   card: 'card3'
}

const pokemon3 = {
   nomePokemon: 'Bulbasaur',
   tipo: 'Grama e Tóxico',
   numeroPokedex: 01,
   consegueEvoluir: true,
   tiposDeAtaque: ["Folhas de Navalha", "Cavar", "Chicotes de Vinha", "Esfera de Energia"],
   img: "./img/Bulbasaur.png" ,
   href: 'https://www.pokemon.com/br/pokedex/bulbasaur',
   card: 'card4',
}

const pokemon4 = {
   nomePokemon: 'Eevee',
   tipo: 'Normal',
   numeroPokedex: 133,
   consegueEvoluir: true,
   tiposDeAtaque: ["Ataque Rápido", "Investida", "Golpe Baixo", "Proteção"],
   img: "./img/Eevee.png",
   href: 'https://www.pokemon.com/br/pokedex/eevee',
   card: 'card5'
}

// Semana 3
const pokearray = [{
   nomePokemon: 'Pikachu',
   tipo: 'Eletrico',
   numeroPokedex: 25,
   consegueEvoluir: true,
   tiposDeAtaque: ["Ataque Rápido", "Investida Trovão", "Cauda de Ferro", "Choque do Trovão"],
   img: "./img/pikachu.png",
   href: 'https://www.pokemon.com/br/pokedex/pikachu',
   card: 'card'
},
{
    nomePokemon: 'Pidgey',
    tipo: 'Normal e Vôo',
    numeroPokedex: 16,
    consegueEvoluir: true,
    tiposDeAtaque: ["Bicada", "Ventania", "Ataque Rápido", "Ataque de Asa"],
    img: "./img/Pidgey.png",
    href: 'https://www.pokemon.com/br/pokedex/pidgey',
    card: 'card2'
},
{
    nomePokemon: 'Charmander',
    tipo: 'Fogo',
    numeroPokedex: 04,
    consegueEvoluir: true,
    tiposDeAtaque: ["Rosnar","Presas de Fogo", "Garras de Metal", "Lança-Chamas"],
    img: "./img/charmander.png",
    href: 'https://www.pokemon.com/br/pokedex/charmander',
    card: 'card3'
},
{
    nomePokemon: 'Bulbasaur',
    tipo: 'Grama e Tóxico',
    numeroPokedex: 01,
    consegueEvoluir: true,
    tiposDeAtaque: ["Folhas de Navalha", "Cavar", "Chicotes de Vinha", "Esfera de Energia"],
    img: "./img/Bulbasaur.png",
    href: 'https://www.pokemon.com/br/pokedex/bulbasaur',
    card: 'card4',
},
{
    nomePokemon: 'Eevee',
    tipo: 'Normal',
    numeroPokedex: 133,
    consegueEvoluir: true,
    tiposDeAtaque: ["Ataque Rápido", "Investida", "Golpe Baixo", "Proteção"],
    img: "./img/Eevee.png",
    href: 'https://www.pokemon.com/br/pokedex/eevee',
    card: 'card5'
},
];
const pokesarray = [];

for (const i in pokearray) {
    if (pokearray[i].consegueEvoluir == true) {
       pokesarray.push(pokearray[i]);
       console.log(pokearray)
    } else {
       alert(`**ALERT** O ${pokearray[i].nomePokemon} não foi adicionado, pois ele não consegue evoluir,`);
    }
 }
 
// Codigo refatorado

for (let index = 0; index < pokesarray.length; index++) {
    const element = pokesarray[index].tiposDeAtaque.toString();
    console.log(element);
 }
 
 function pokeRelatorio(objeto) {
 
    console.log(`Nome: ${objeto.nomePokemon.toUpperCase()}\n Tipo: ${objeto.tipo}\n Numero na Pokedex: ${objeto.numeroPokedex}\n  Evolui: ${objeto.consegueEvoluir}\n Ataques: ${objeto.tiposDeAtaque}\n`)
 }
 for (let i = 0; i < pokesarray.length; i++) {
    pokeRelatorio(pokesarray[i]);
 };
 
 
 function buscaPokemon() {
    let container;
    const search = document.querySelector(".search-bar").value;
    if (!search) {
       alert("Digite algo para procurar pokemons!");
    } else {
       const pokemonsFiltrados = filtroPoke(pokesarray, search);
       console.log(pokemonsFiltrados);
       container = `<section id="${pokemonsFiltrados[0].card}">
                 <div id="poke-imagem"><img class="pikachu" src="${pokemonsFiltrados[0].img}" alt="imagem do pikachu"></div>
                 <ul>
                     <li id="Nome"><a href="${pokemonsFiltrados[0].href}" target="_blank">Nome: ${pokemonsFiltrados[0].nome}</a></li>
                     <li><strong>Tipo:</strong> ${pokemonsFiltrados[0].tipo}</li>
                     <li>Numero na Pokedex: ${pokemonsFiltrados[0].numeroPokedex}</li>
                     <li>Evolui: ${pokemonsFiltrados[0].consegueEvoluir}</li>
                     <li>Ataques: ${pokemonsFiltrados[0].tiposDeAtaque}</li>
                 </ul>
             </section>`;
       document.querySelector(".card-container").innerHTML = "";
       document.querySelector(".card-container").innerHTML = container;
    }
 }
 function filtroPoke(array, nomePokemon) {
    if (nomePokemon != undefined) {
       const pokes = array.filter((objeto) => objeto.nomePokemon.toUpperCase() == nomePokemon.toUpperCase());
       if (pokes.length >= 1) {
          return pokes;
       } else {
          alert('nenhum pokemon foi encontrado.')
       }
    }
 }