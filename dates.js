let myDate = new Date()


// console.log(myDate.toString());
// console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString())

// console.log(typeof myDate);

// let myCreatedDate = new Date (2024 ,4,29)
// let myCreatedDate = new Date ("2024-05-29")
let myCreatedDate = new Date ("05-29-2024")




// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})