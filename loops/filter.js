// const coding = ["js","ruby","java","python","cpp"]



// const values = coding.forEach( (item) => {

//     // console.log(item);
//     return item
// })


// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter(  (num) => {

//     return num > 4
// })


// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


// searching books using filter method in array  
const books = [
    { title: 'Book 1', genre : 'History', author: 'John Doe', year: 1995 },
    { title: 'Book 2',  genre : 'Bio', author: 'Jane Smith', year: 2005 },
    { title: 'Book 3', genre : 'Fitction', author: 'Alice Johnson', year: 1999 },
    { title: 'Book 5', genre : 'Fitction', author: 'Emily Brown', year: 2003 },
    { title: 'Book 6', genre : 'Science', author: 'Emily Brown', year: 2005 },
    { title: 'Book 7', genre : 'History', author: 'Emily Brown', year: 2006 },
  ];


  let userBooks = books.filter( (bk) => bk.genre === "History")

   userBooks = books.filter( (bk) => bk.year >= 2005 && bk.genre === "History")

  console.log(userBooks);