// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     let a = 25 
//     a++;
//     alert("btn1 was clicked")
//     console.log(a);

// }

// let box = document.querySelector("div")

// dispatchEvent.onmousover = () => {
//     alert('you are in div')
//     console.log("you are inside div");
// }

// btn1.addEventListner("click" ,(e) =>{
//     console.log("button1 was clicked");
// })

const modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "light";

modeBtn.addEventListener("click", () => {
    if (curMode === "light") {
        curMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        curMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(curMode); // Or update a specific element's text content
});


// mini project change background color using evnts setinver time 



// generate a random color

// const randomColor = function () {

//     const hex = "0123456780ABCDEF";

//     let color = '#'

//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 10)]


//     }
//     return color
// };


// let intervalId
// const startChangingColor = function () {

//     if (!intervalId) {
//         intervalId = setInterval(changeBgColor, 1000)
//     }

//     function changeBgColor() {
//         document.body.style.backgroundColor = randomColor()
//     }
// }

// const stopChangingColor = function () {
//     clearInterval(intervalId)
//     intervalId = null;
// }

// document.querySelector("#start").addEventListener

// ('click', startChangingColor)


// document.querySelector("#stop").addEventListener

// ('click', stopChangingColor)


// project 2 

