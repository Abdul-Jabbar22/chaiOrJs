// for of 


const arr = [1,2,3,4,5]

for (const num of arr) {

    // console.log(num);
    
}

const greetings = "hello world"

for (const gret of greetings) {
    
    // console.log(`Each char is ${gret}`);
}

// Map 

const map = new Map()

map.set("Pk","Pakistan")
map.set("UAE","United Arab Emerates")


// console.log(map);

// applying for of loop on array

for (const [key , value] of map) {
    
    // console.log(key,':-', value);
}


// applying for of on object it will not work
// const mayObmyObjectject ={
//     'game1':"nfs",
//      "game2": "spiderman"
// }
// for (const [key , value] of myObject) {
    
//     console.log(key,':-', value);


// }