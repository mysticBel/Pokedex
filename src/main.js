import data from './data/pokemon/pokemon.js';
import { filterByName , filterByType, pokemonOrder,
  attackName,calculateDps, calculateEps,calculateDmgStab} from './data.js';

const pokemonList = data.pokemon;
const containerPokemons = document.getElementById('container-card');
// const containerModal = document.querySelector('.container-modal');


// const colors = {
// 	fire: '#FDDFDF',
// 	grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#f4e7da',
// 	rock: '#d5d5d4',
// 	fairy: '#fceaff',
// 	poison: '#e6e6ff',
// 	bug: '#f8d5a3',
// 	dragon: '#97b3e6',
// 	psychic: '#eaeda1',
// 	flying: '#F5F5F5',
// 	fighting: '#E6E0D4',
// 	normal: '#F5F5F5'
// };



// --------------------filterByName----------

const MessageError = () => {
  containerPokemons.innerHTML = '';
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
     div.className = 'message-error';
     img.src = 'IMG/psyduck-confussed.gif';
     p.innerHTML = '🤪⚠️. . . Oopps !! Error 404 Pokemon Not Found!  ';
  div.appendChild(img);
  div.appendChild(p);
  containerPokemons.appendChild(div);
};

const inputSearch = document.querySelector('#inputFilterByName');

inputSearch.addEventListener('keyup', () => {
  const searchedPokemons = filterByName(pokemonList, inputSearch.value);
  if (searchedPokemons.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(searchedPokemons);
  }
});


// --------------filterByType------------

const elementTypeFilter = document.querySelector('#filterByType-options');

elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all' || elementTypeFilter.value === '' ) {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const filteredPokemonsByType = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(filteredPokemonsByType);
  }
});


// --------------order options------------

const optionsOrder =document.querySelector('#orderBy-options');

optionsOrder.addEventListener("change" , () => {
  const selection = optionsOrder.value;
  if (optionsOrder.value === '') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const dataOrder = pokemonOrder.differentOrder(pokemonList,selection);
    
    containerPokemons.innerHTML = '';
     showPokemon(dataOrder);
  }});

//-----sortby options --------------------

const optionsSortBy =document.querySelector('#sort-by-order');

optionsSortBy.addEventListener("change" , () => {
  const selection2 = optionsSortBy.value;
if (optionsSortBy.value === '') {
  containerPokemons.innerHTML = '';
  showPokemon(pokemonList);
} else {
  const sortByOrder = pokemonOrder.sortedByOrder(pokemonList,selection2);
  containerPokemons.innerHTML = '';
     showPokemon(sortByOrder);
}});

// --------------reload------------

document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});


//-------Show Pokemons + counter-------------------

const TypePokemon = (arrayType) => {
    let imgEachPokemon = '';
    arrayType.forEach((typeElement) => {
      imgEachPokemon += `<div id="poke-type-icon-box"><img id="poke-type-icon"src="type-icons/${typeElement}.png" alt=" type pokemon"/><div>`;  
    });
    return imgEachPokemon;
  };
 

// const backgroundType = (arrayType) =>{
//   let colorEachBackground = '';
//   arrayType.forEach((typeElement) => {
//     colorEachBackground =  colors[typeElement];
 
//   });
//   return colorEachBackground;
// }  


// const backgroundType = (arrayType) =>{
//   let colorEachBackground = '';
//   arrayType.forEach((typeElement) => {
//     colorEachBackground =  `<img id="poke-background-card" src="background-type-card/${typeElement}.png" alt=" background type pokemon"/>`;
 
//   });
//   return colorEachBackground;
// }  

const showPokemon = (list) => {
    let count = 0;
    list.forEach((pokem) => {
      const card = document.createElement('div');
      card.className = 'pokemon-group';
      // card.style.background = backgroundType(pokem.type);
      card.innerHTML = `
        <div class="${pokem.type[0]} comun-card">
        <div class="poke-img">
          <p class="poke-num">Nº ${pokem.num}</p>
          <div id="poke-container-img"> <img src="${pokem.img}"></div>
          
        </div>
        
        <div class="container-info">
          <p class="poke-name">${pokem.name}</p>
          <!--<div class="comun">${pokem.type}</div>-->
          <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
          <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
         
        <div id="poke-type-icon-container">${TypePokemon(pokem.type)}</div>
          </div>
      
        `;
  
      card.addEventListener('click', () => {
        showModal(pokem);
        
      });
      count += 1;
      containerPokemons.appendChild(card);
    });
    document.getElementById('quantity').innerHTML = count;
    return containerPokemons;
  };

  showPokemon(pokemonList);



//---------------Show modals -------------------
  const showModal = (pkm) => {
    const modal = document.createElement('div');

    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal-content"> 
                        <span class="close">&times;</span>
                        <div class="modal-info">
                           <p class="poke-name-card bold">${pkm.name} N°<spam>${pkm.num}</spam></p>
                           <img class="threeD-IMG" src= "https://projectpokemon.org/images/normal-sprite/${pkm.name}.gif"></img> 
                           <p class="about">${pkm.about}</p>
                           <p class="omun-modal contenido"">Type</p>
                           <p>${pkm.type}</p>
                         </div>                                
                       
                          <div class="comun-modal contenido">
                                <div>
                                  <p class="bold">Height</p>
                                  <p>${pkm.size.height}</p>
                                </div>                                
                          </div> 

                           <div class="comun-modal contenido">                            
                              <div>
                                <p class="bold">Weight</p>
                                <p>${pkm.size.weight}</p>
                              </div>
                           </div>


                           // added

                           <article class="column" >
                           <h2 class="subtitle">Stats </h2>
                               <p> Max-HP<br>${pkm.stats['max-hp']} </p>
                               <p> Max-CP<br>${pkm.stats['max-cp']} </p>
                               <p> Base-attack<br>${pkm.stats['base-attack']} </p>
                               <p> Base-Defense<br>${pkm.stats['base-defense']}</p>
                               <p> Base-Stamina<br>${pkm.stats['base-stamina']}</p>
                             </article> 
                        
                        <div class="modal-flex1">   
                         <div>
                           <p class="">Resistant</p>                       
                           <p>${pkm.resistant}</p>
                          </div>
                        </div>

                        <div class="comun-modal contenido">   
                         <div>
                           <p class="">Weaknesses</p>                   
                           <p>${pkm.weaknesses}</p>
                          </div>
                        </div>


                        //added
                        <article class="rows">
                        <table>
                        <tr><td class='tittleAttack' colspan="${(attackName(pkm['quick-move'])).length+1}.">QUICK MOVE</td></tr>
                        <tr><td>Name </td>${showTable(attackName(pkm['quick-move']))   }</tr>
                        <tr><td>DPS  </td> ${showTable(calculateDps(pkm['quick-move'], pkm.type))}</tr>
                        <tr><td>EPS  </td> ${showTable(calculateEps(pkm['quick-move']))}</tr>
                        <tr><td>STAB  </td> ${showTable(calculateDmgStab(pkm['quick-move'], pkm.type))}</tr>
                   
                      </table>
                      </article>
                      <article class="rows">
                      <table>
                        <tr><td class='tittleAttack' colspan="${(attackName(pkm['special-attack'])).length+1}.">SPECIAL ATTACK</td></tr>
                        <tr><td>Name  </td>${showTable(attackName(pkm['special-attack']))}</tr> 
                        <tr><td>DPS  </td> ${showTable(calculateDps(pkm['special-attack'], pkm.type))}</tr>
                        <tr><td>EPS  </td> ${showTable(calculateEps(pkm['special-attack']))}</tr>
                        <tr><td>STAB  </td> ${showTable(calculateDmgStab(pkm['special-attack'], pkm.type))}</tr>
                       
                      </table>
                      </article>


                        //end added

                        <div class="comun-modal contenido">   
                         <div>
                           <p class="">egg</p>
                           <p>${pkm.egg}</p>
                          </div>
                        </div>
                        
                        <div class="comun-modal contenido">   
                         <div>
                           <p class="icon-type">Evolution</p>

                           <p>${pkm.evolution.candy}</p>
                          </div>
                        </div>
                   


                      </div>
                     </div> 
                      `;
    document.querySelector('.container-modal').appendChild(modal);
    modal.style.display="block";

    // close-tag
    let closetag = modal.querySelector(".close");
    closetag.addEventListener("click", () =>{
      modal.style.display = "none";
    })
  }
  

  function showTable(data) {
    const table = data.map(elemento => {
      return `<td>${elemento}</td>`
    }).join('');
    return table;
  
   
    // const showStatistics= document.getElementById('bar-chart')


    //  statisticsButton.addEventListener('click', () => {
    //   showStatistics.style.display = "block";
    
  }

 // en el modal.. 
//<p>${TypePokemon(pkm.resistant)}</p>
//  <p>${TypePokemon(pkm.type)}</p>

  // <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
  //         <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>