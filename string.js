const name = "abdul";

const repCount = 50 


// console.log(name + repCount + "value");


// new syntax for concate the string 

console.log(`Hello my name is ${name} and my repo count is ${repCount}`);


const gameName = new String('abdul jabbar');

// console.log(gameName[0]);
// console.log(gameName.charAt(3));
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
console.log(gameName.indexOf('j'));

const newString = gameName.substring(2,5);
console.log(newString);

const anotherString = gameName.slice(-8,4);

console.log(anotherString);

const newString1 = "   abdul     ";

console.log(newString1)
console.log(newString1.trim())

const url = "https://jabbar.com/abdul%20jabbar";

console.log(url.replace('%20','-'));

console.log(url.includes('jabbar'))
console.log(url.includes('hira'))

console.log(gameName.split('-'));
