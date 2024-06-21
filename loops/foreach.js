const coding = ["js","ruby","java","python","cpp"]


// coding.forEach( function  (item) {
 
//     console.log(item);

// })

// arrow function 

// coding.forEach( (val) => {
//     console.log(val)
// })

// simple function bhi add kr skty hn for each ma 

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe)
  

// for each ma hm item and index also array bhi print krwa skty han 

// coding.forEach((item , index ,arr) =>{
//     console.log(item ,index,arr);
// })

const myCoding = [
    {
        languageName : "javascipt",
        languageFileName: "js",

    },
    {
        languageName : "java",
        languageFileName: "java",
        
    },
    {
        languageName : "pyth",
        languageFileName: "py",
        
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})