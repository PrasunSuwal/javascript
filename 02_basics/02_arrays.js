const marvel_heroes = ["thor","ironman","hulk"]
const dc_heores = ["batman","flash", "superman"]

// marvel_heroes.push(dc_heores)//[ 'thor', 'ironman', 'hulk', [ 'batman', 'flash', 'superman' ] ]

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heores)//[ 'thor', 'ironman', 'hulk', 'batman', 'flash', 'superman' ]
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heores]//spread operator
console.log(all_new_heroes);

const another_array = [1,2,3,[2],3,[4,5,6,[1,2],8]]

const useable_array = another_array.flat(Infinity)//we need to give the depth upto which we need to sove the array
console.log(useable_array);


console.log(Array.isArray("Prasun"))
console.log(Array.from("Prasun"))//to convert into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score2,score3,score1));