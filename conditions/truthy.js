// const userEmail = "jabbar"


// if (userEmail){
//     console.log("got user email");
// }else{
//     console.log("dont have emmail");
// }

// falsy values 

// false, 0, -0, BigIn 0n , "" ,null,  undefined, NaN

// truthy values 


// "0" , 'false',"space" , [],{}, function()


const userEmail = []

if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// nullish coalescing operator (??): null undefined 


let val1 ;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15


val1 = null ?? 10 ?? 15



console.log(val1);



//Terninary operator

// condition ? true : false 

const iceTeaPrice = 


iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");