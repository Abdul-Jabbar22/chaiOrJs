// video 1 


// var c = 300;
let a = 300

if(true){

    let a = 10;

    const b = 20 ;
    
    var c = 30 ;
    // console.log("INner ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// video 2 nested scop 

function one(){
    const username = "abdul";


    function two(){
        const website = "youtube";

        // console.log(username);
    }

// console.log(website);

two()


}

one()

if(true){
    const username = "abbul"
    if(username === "abbul"){
        const website = "  youtube";

        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


// ++++++++++ intersting ++++++++++++ 

console.log(addone(5)) // executing before decleration
function addone(num){

    return num + 1;
}

const addTwo = function (num){

    return num + 2
}

addTwo(5 )