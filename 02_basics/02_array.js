const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // array k andr array aa jaega
// console.log(marvel_heros[3][1]); // flash

// heros = marvel_heros.concat(dc_heros)
// console.log(heros); // concatenated two arrays

// spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // concatenated
    
const array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array1 = array1.flat(1)
// console.log(real_array1); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const real_array2 = array1.flat(Infinity)
// console.log(real_array2); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.from("Priya")); // [ 'P', 'r', 'i', 'y', 'a' ]
console.log(Array.from({name: "priya"})); // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

