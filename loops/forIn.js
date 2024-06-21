
// applying for in loop on object 

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "Ruby",
    switf : "swift by apple"
}


for (const key in myObj) {
 
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// applyin for in on array 


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
   
    console.log(programming[key]);
}