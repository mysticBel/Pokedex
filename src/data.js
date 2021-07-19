
export const filterByName = (arrayObj, input) => {
  const resultByName = arrayObj.filter((x) => x.name.startsWith(input.toLowerCase()));
  return resultByName;
};

export const filterByType = (arrayObj, elementType) => {
  const resultByType = arrayObj.filter((x) => x.type.includes(elementType));
  return resultByType;
};



export const orderByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}


export const orderByNumber = (a, b) => {
  if (a.num < b.num) {
    return -1;
  }
  if (a.num > b.num) {
    return 1;
  }
  return 0;
}

//función para ordenar la data según CP
export const orderByCP = (a, b) => {
  if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp']))  {
    return -1;
  }
  if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) { 
    return 1;
  }
  return 0;
}

//función para ordenar la data según HP
export const orderByHp = (a, b) =>{
  if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
    return -1;
  }
  if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
    return 1;
  }
  return 0;
}



export const pokemonOrder = {
  differentOrder: (everyPokemon, selected) => {
    let result;
    switch(true) {
      case selected === "A-Z":
        result = everyPokemon.sort(orderByName);
         break;
      case selected === "Z-A":
        result = everyPokemon.sort(orderByName).reverse();
        break;
      case selected === "Lowest Number":
          result = everyPokemon.sort(orderByNumber);
        break;
      case selected === "Highest Number":
          result = everyPokemon.sort(orderByNumber).reverse();
        break;
    }
      return result;
    
  },
  sortedByOrder: (everyPokemon,selected) => {
    let result2;
    switch(true) {
      case selected === "ascendingCp":
        result2 = everyPokemon.sort(orderByCP);
         break;
      case selected === "descendingCp":
        result2 = everyPokemon.sort(orderByCP).reverse();
        break;
      case selected === "ascendingHp":
          result2 = everyPokemon.sort(orderByHp);
        break;
      case selected === "descendingHp":
          result2 = everyPokemon.sort(orderByHp).reverse();
        break;
  }
  return result2;
    
}}

export const attackName = (attack) => {
  const name = attack.map(name => name.name);
  return name;
};

export const calculateDmgStab = (specialAttack, typePokemon) => {
  const result = specialAttack.map((obj) => {
    let stab = 0;
    const damage = Number(obj['base-damage']); 
    if (typePokemon.includes(obj.type)) {
      stab = ((damage * 0.5)); 
    }    
    return Number((stab + damage))
  });
  return result  
}; 

export const calculateDps = (specialAttack, pokemonType) => {
  const result = specialAttack.map((obj) => {
    let stab = 0;

    const attackType = obj.type;
    const baseDamage = Number(obj['base-damage']);
    const attackDuration = Number(obj['move-duration-seg']);
 
    if (pokemonType.includes(attackType)) {
       stab = Number((baseDamage * 0.5)) ; 
    }

    return Math.round(((stab + baseDamage) / attackDuration)); 
  });
  return result  
};

export const calculateEps = (specialAttack) => {

  const result = specialAttack.map((obj) => {
    const moveDuration = Number(obj['move-duration-seg']); 
    const energy = Number(obj.energy);

    return Math.round(energy / moveDuration); 
  });
  return result   
};


// función a invocar para el conteo de tipos

export const countTypes = (data, valuetype) =>  {  
  const type = valuetype.toLowerCase();
  return data.filter(a => a.includes(type)).length;
}

// //función para ordenar top10
// export const orderBySpawn = (a, b) =>{
//   return a['spawn-chance'] - b['spawn-chance'];
// }