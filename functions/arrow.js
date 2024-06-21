const user = {

    username : "abdul",
    price : 999,

    welcomeMsg: function(){
        
        console.log(`${this.username} , Welcome to website`)
        console.log(this);
    }

}

// user.welcomeMsg()
// user.username = "jabbar"
// user.welcomeMsg()


// console.log(this);

// function chai(){

//     console.log(this.username);
// }
// chai()

// arow functions 


// const chai = function  (){

//     let username = "abdul";

//     console.log(this.user);
// }

// chai()

const chai =   () =>{

    let username = "abdul";

    console.log(this);
}

// chai()

// actull arrow function 

// const addTWo = (num1,num2) =>{

//     return num1 + num2 
// }

// console.log(addTWo(3,4));

// const addTWo = (num1,num2) =>  num1 + num2   // implisit return
// const addTWo = (num1,num2) =>  (num1 + num2)   // use in react
const addTWo = (num1,num2) =>  ({usename : "abdul"})


console.log(addTWo(3,4));

const myArray = [3,43,56,6,]

myArray.forEach()