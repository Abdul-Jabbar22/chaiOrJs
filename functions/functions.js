function sayMayName() {

    console.log("A");
    console.log("B");
    console.log("D");
    console.log("U");
    console.log("L");



}

// sayMayName()

// function addTwoNumbers (number1, number2){ // parameters pass

//    console.log( number1 + number2 );
// }

function addTwoNumbers(number1, number2) { // parameters pass

    // let result = number1 + number2

    // return result
    return number1 + number2;
}

const result = addTwoNumbers(2, 6); // arguments pass

// console.log("Result  ", result)


function loginUserMsg(username = "Abdul")   {

    if (!username) {
        console.log("plz enter  user name");
        return
    }
    return `${username} just logged In `
}

//  console.log(loginUserMsg("Abdul_Jabbar"))
// console.log(loginUserMsg("jabbar"))



function calculateCartPrice(...num1){
  // all values jo argu hon gi sb ko array bna dy ga (...rest operator)
    return num1
}

console.log(calculateCartPrice(200,300,400,500));


// Object pass in functions 

const user  = {
    username :"abdul",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleObject(user)
handleObject ({
    username : "abudl",
    price : "399"
})

// array pass in function 


const myNewArray = [ 200,300,400,500]

function returnSecondValue(getArray){

    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500])); // direct array pass