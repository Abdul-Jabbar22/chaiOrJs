// primitive 

// There are 7 types of primitive datatypes in js

// 1 string 
// 2 number 
// 3 bolean 
// 4 null 
// 5 undefined 
// 6 sybmol
// 7 bigint 

const score = 100;

let a = "Abdul";
const scoreValue = 100.3;


const isloogIn = false;

const outsideTemp = null

let userEmail ; 

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 12323232323246n;


// console.log(bigNumber);
// non primitive (refrence type)

// 1 Array
// 2 Object
// 3 Functions 

const heros = ["abdul","jabbar","abdul","sattar"];


let myObj = {
    name : "abdul jabbar",
    age : 22 ,
}
const firstFun = function (){

    console.log("hello world");
}
console.log(typeof myObj);

