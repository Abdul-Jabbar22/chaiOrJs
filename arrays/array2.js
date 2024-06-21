

const marvel_heros = ["thor","ironman","spiderman"];

const dc_heros = ["superman","flash","batman"];



// marvel_heros.push(dc_heros);

// console.log(marvel_heros);


// const allHeros = marvel_heros.concat(dc_heros);


// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]; // sepread operatore to combine 2 arrays

// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];


const nested_array = another_array.flat(Infinity);

// console.log(nested_array);


console.log(Array.isArray("abdul"))
console.log(Array.from("abdul"))
console.log(Array.from({name : "hitash"})) // intersting 


let score = 100

let score2 = 200 

let score3 = 300 


console.log(Array.of(score,score2,score3))

