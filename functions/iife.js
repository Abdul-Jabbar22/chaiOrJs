// Immediately Invoked Function Expression

(function chai() {

        console.log(`DB CONNECTED`)

    }

)(); // semicolon lazmi ha terminate krny k lia 

// arrow functions ma use 


// without name iife is just arrow function which is below
( (name) =>{
    console.log(`db CONTTECTED 2 ${name}`);
})
(`abdul`);

// named iffe 

(function ourcode() {

    console.log(`DB CONNECTED 3`)

}

)();