// singleton


// object literals 

const mySymbol = Symbol("key1")

const jsUser = {
    name: "abdul",
    "full name ": "Abdul Jabbar",
    [mySymbol]: "mykey1",
    age: 18,
    salary: 40000,
    locaction: "lahore",
    email: "@jabbar.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser ["full name"])
// console.log(typeof[mySymbol])

jsUser.email = "abduljabbar@gmail.com"

// console.log(jsUser);

// Object.freeze(jsUser)
jsUser.email = "abduljabbargoogle@gmail.com"

// console.log(jsUser)

jsUser.greeting = function(){

    console.log("hellow js users");
}
jsUser.greeting2 = function(){

    console.log(`hellow js users ,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());