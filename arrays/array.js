// array


const myArr= [0,1,2,3,4,5,];
// const myHeros = new Array (1,2,3,4,5,6)

// console.log(myArr[7]);
// console.log(myHeros);

// array methods 


// myArr.push("abdul")
// myArr.pop()
  
// myArr.unshift(10) // argumetn pass krna hota ha 
// myArr.shift() // argumetn pass ni krna hota 


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3 ) // orignal array ko change  ni krta

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // orignall array ko change kr deta ha
console.log("C ", myArr);
console.log(myn2);