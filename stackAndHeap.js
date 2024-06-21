// stack (primitive types)

//Heap 

let myName = "Abdul jabbar";

let another = "abu safyan";

another = "chi or code";

// console.log(myName);
// console.log(another);

let userOne = {
    email : "@jabbar.com",
    name : "jabbar",
}

let userTwo = userOne;

console.log(userTwo);


userTwo.email = "@abul.com";

console.log(userOne.email)
console.log(userTwo.email)
