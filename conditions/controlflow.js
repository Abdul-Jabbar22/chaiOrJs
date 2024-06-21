//if

// const temp = 41



// if(temp < 50){
 
//     console.log("less than 50");
// }else{
//     console.log("temeprature is greeter than 50 ");
// }


// const score = 200;

// if( score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


const balance = 1000

// if (balance > 50) console.log("test");

// console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 900){ 
//     console.log("less than 750");

// }else{
//     console.log("less than 1200");
// }
 
// AND operator 



const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedin && debitCard && 2==3){

    console.log("allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user login ");
}