# Data Lovers : Pokedex 

## Index

* [1. Product Definition](#1-product-definition)
* [2. User Stories](#2-user-stories)
* [3. User interface desing](#3-user-interface-desing)
* [4. Learning Objectives](#4-learning-objectives)
* [5. Technical Considerations](#5-technical-considerations)
* [6. Checklist](#6-checklist)

***



## 1. Product Definition

     
The main idea of this web page "Pokedex" is to help users to search, filter and obtain statistical data about the first 251 pokemons, in order to get a better user experience while playing the awesome game _PokemonGo_ with the information received from the Pokedex. <br>
The product shows some main characteristics in an orderly manner. <br>
It can be used before, during and after the user has navigated to the platform, so they can play strategically in the game.   



## 2. User Stories



## User Story 1 (Beginner)
 _Yo como_ jugador Pokémon GO beginner _quiero_ realizar una **búsqueda** en la pagina **por nombre** del
pokemón _para_ así acceder mucho más rápido a las características de este.

**_Criterios de Aceptación:_** 

     ☑️  En la interfaz debe estar visible el buscador y dentro un texto " search pokemon by name"
     ☑️  Al dar click en la barra de busqueda, filtrar los pokemones que contengan las letras que se van colocando.
     ☑️  La pagina debe mostrar el pokemón deseado.


## User Story 2 (Beginner)
 _Yo como_ maestro pokemon GO beginner _quiero_ **filtrar** los pokemones **por tipo** ( Normal, Fighting,
 Flying, Poison, Ground, Rock, Bug, Ghost, Steel, Fire, Water, Grass, Electric, Psychic, Ice,
 Dragon, Dark, Fairy). _para_ decidir qué tipo de pokemon usaré para mis siguientes batallas.

  **_Criterios de Aceptación:_**

     ☑️  Contar con una opción desplegable que contenga los  18 tipos de pokemones. 
     ☑️  De todos los pokemones filtrados con  el tipo deseado poder dar clic en el pokemon deseado.
     ☑️  Visualizar en una ventana emergente las características completas del pokemon elegido.


## User Story 3 (Beginner)
_Yo como_ maestro pokemon GO beginner _quiero_ poder **ordenar** a los pokemones de la A-Z y de la
Z-A , _para_ poder tener una visualización ordenada de los 251 Pokemones.

**_Criterios de Aceptación:_** 

     ☑️  Contar con una opcion desplegable que indique 'ORDENAR' 
     ☑️  Al dar click, se debe mostrar las opciones : A-Z  y  Z-A
     ☑️  Habiendo seleccionado una opción, poder visualizar los pokemones de manera ordenada.
 

## User Story 4 (Advanced)
_Yo como_ maestro pokemon GO avanzado _quiero_ saber los principales ataques, movimientos, evolución
 de mis pokemones para poder **definir mi estrategia de batalla** con otros maestros pokemones.

**_Criterios de Aceptación:_** 

     ☑️  Contar con una interfaz que muestre a los Pokemones  
     ☑️  Al darle click, aparecerá un modal en donde el usuario podra visualizar  las características
          del Pokemón seleccionado.


## 3. User interface desing


 `Low fidelity prototype`

![imag desktop](https://raw.githubusercontent.com/mysticBel/LIM015-data-lovers/main/src/design/design-1.png)

![imag mobile](https://raw.githubusercontent.com/mysticBel/LIM015-data-lovers/main/src/design/design-2.png)

 `High fidelity prototype` 

 ![imag](https://raw.githubusercontent.com/mysticBel/Pokedex/main/src/IMG/design-final.png)

## 4. Learning Objectives

### `HTML & CSS`

* [✔️🐳] [Use of semantic HTML.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [✔️🐳] [Use of CSS selectors.](https://css-tricks.com/almanac/selectors/)
* [✔️🐳] Build your application respecting the design made (layout).
* [✔️🐳] [CSS: flexbox.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM & Web APIs

* [✔️🐱] [Use of DOM selectors](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [✔️🐱] [DOM event handling.](https://www.w3schools.com/js/js_events.asp)
* [✔️🐱] [Dynamic DOM manipulation.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [✔️🐼] Use of conditionals (if-else | switch | ternary operator)
* [✔️🐼] [Using loops (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [✔️🐼] [Use of functions (parameters | arguments | return )](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [✔️🐼] [Manipulate arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [✔️🐼] [Manipulate objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [✔️🐼] [Use of ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [✔️🐼] [Differentiate between expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [✔️🐼] [Differentiate between atomic and structured data types.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [✔️🐱] [Unit testing](https://jestjs.io/docs/es-ES/getting-started)

### Code structure and style guide

* [✔️🐼] [Organize and divide the code into modules (Modularization)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [✔️🐼] Use of descriptive identifiers ([Nomenclature](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semantics](https://geekytheory.com/semantica-coder))
* [✔️🐼] Use of linter (ESLINT)

### Git & GitHub

* [✔️🐱] [Using git commands(add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [✔️🐱] Managing GitHub repositories (clone | fork | gh-pages)
* [ ] Github collaboration (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [✔️🦄] Design the application thinking and understanding the user.
* [✔️🦄] Create prototypes to get feedback and iterate.
* [✔️🦄] Apply visual design principles (contrast, alignment, hierarchy)
* [✔️🦄] Plan and execute usability tests.



## 5. Technical Considerations

This project has been fully implemented in JavaScript
(ES6), HTML and CSS.

 _boilerplate_

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data 
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  |  └── athletes
|  |     ├── athletes.js
|  |     └── athletes.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

## 6. Checklist


* [✔️🐶] Use VanillaJS.
* [✔️🐶] Does not use `this`.
* [✔️🐶] Pass linter (`npm run pretest`)
* [✔️🐶] Pass tests (`npm test`)
* [-] Unit tests cover a minimum of 70% of statements, functions and
  lines and branches.
* [✔️🐶] Include clear and informative _Product Definition_ in `README.md`.
* [✔️🐶] Include user stories in `README.md`.
* [✔️🐶] Include _sketch_ of the solution (low fidelity prototype) in
  `README.md`.
* [✔️🐶] Includes _User Interface Design_ (hi-fi prototype)
  in `README.md`.
* [✔️🐶] UI: Shows list and / or table with data and / or indicators.
* [✔️🐶] UI: Allows you to sort data by one or more fields (asc and desc).
* [✔️🐶] UI: Allows you to filter data based on a condition.
* [✔️🐶] UI: It is _responsive_. *modals need fixing.
