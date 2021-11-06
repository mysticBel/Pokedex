# Data Lovers : Pokedex 
![image](https://c.tenor.com/CpRW4WUGa3IAAAAi/pokéball-pokémon.gif) <br><br>
## Index

* [1. Product Definition](#1-product-definition)
* [2. User Stories](#2-user-stories)
* [3. User interface desing](#3-user-interface-desing)
* [4. Learning Objectives](#4-learning-objectives)
* [5. Technical Considerations](#5-technical-considerations)
* [6. Checklist](#6-checklist)
<br><br>
***

<br>

## 1. Product Definition

     
The main idea of this web page "Pokedex" is to help users to search, filter and obtain statistical data about the first 251 pokemons, in order to get a better user experience while playing the awesome game _PokemonGo_ with the information received from the Pokedex. <br>
The product shows some main characteristics in an orderly manner. <br>
It can be used before, during and after the user has navigated in the platform, so they can play strategically in the game.   


<!-- https://media.giphy.com/media/7hgc1qosAEG7C/giphy.gif https://media.giphy.com/media/TcG7Tw3uq6tJS/giphy.gif  https://media.giphy.com/media/aEqAZzykd3kyY/giphy.gif-->
<br>

## 2. User Stories

![image](https://media.giphy.com/media/7L9FYvnh467YI/giphy.gif)

## User Story 1 (Beginner)

As a Pokémon GO beginner player, I _want_ to perform a  **search** on the page **by the name** of the
pokemon _to_  access the features much faster.


**_Criteria of acceptance:_**

     ☑️ In the interface the search engine must be visible and inside it there must be a text saying "search pokemon by name"
     ☑️ By clicking on the search bar, filter the pokemon that contains the letters that are being placed.
     ☑️ The page must show the desired Pokémon.


## User Story 2 (Beginner)
 As a Pokémon GO beginner player, I _want_ to **filter** all pokemons **by type** ( Normal, Fighting,
 Flying, Poison, Ground, Rock, Bug, Ghost, Steel, Fire, Water, Grass, Electric, Psychic, Ice,
 Dragon, Dark, Fairy). _to_ decide what kind of pokemon I will use for my next battles.

  
**_Criteria of acceptance:_**

     ☑️ Have a drop-down option that contains the 18 types of pokemons.
     ☑️ Of all the pokemon filtered with the desired type, you can click on the desired pokemon.
     ☑️ View the complete characteristics of the chosen pokemon in a pop-up window.

## User Story 3 (Beginner)
As a Pokémon GO beginner player, I _want_ to  **order** the total of pokemons from A to Z and viceversa
, to get an orderly visualization of the 251 Pokemons.

**_Criteria of acceptance:_**

     ☑️ Have a drop-down option that indicates 'order by'
     ☑️ When you click, the options should be displayed: A-Z and Z-A
     ☑️ Having selected an option, display the pokemons in an orderly way.
 

## User Story 4 (Advanced)
As a Pokémon GO advanced player I, _want_ to know the main attacks, movements, evolution
of my Pokemon so I can ** define my battle strategy ** with other Pokemon masters.

**_Criteria of acceptance:_**

     ☑️ Have an interface that shows the Pokemons
     ☑️ When you click, a modal will appear where the user can view the characteristics
          of the selected Pokemon.
<br><br>

## 3. User interface desing


 `Low fidelity prototype`

![imag desktop](https://raw.githubusercontent.com/mysticBel/LIM015-data-lovers/main/src/design/design-1.png)

![imag mobile](https://raw.githubusercontent.com/mysticBel/LIM015-data-lovers/main/src/design/design-2.png)
<br><br>

 `High fidelity prototype` 

 ![imag](https://raw.githubusercontent.com/mysticBel/Pokedex/main/src/IMG/design-final.png)
<br><br>
<br>

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


<br><br><br>

![image](https://cdn2.bulbagarden.net/upload/thumb/9/96/James_and_Chimecho.png/220px-James_and_Chimecho.png)
<br><br>
_**Pokedex**_  is a project done by Maribel Maza for [Laboratoria](
https://github.com/Laboratoria/LIM015-data-lovers) , <br>July 2021 🤗
<br><br><br>
<a href="https://www.linkedin.com/in/maribel-maza/"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=flat&logo=linkedin&logoColor=white"/></a> <a href="https://github.com/mysticBel"><img alt="Github" src="https://img.shields.io/github/followers/mysticBel?label=follow&style=social"/></a> &nbsp;
<br><br><br>