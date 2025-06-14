// Primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt


// Reference type ( Non-Primitive )

// Array, Objects, Functions

const heros = ["spiderman", "ironman", "shaktiman"];
let  myObj = {
    name: "priya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
} 

// console.log(typeof myFunction); // function object
// console.log(typeof(myObj.name)); // string


// ******************************************************

// Memory

//  Stack (Primitive), Heap (Non-primitive)

let myname = "priya"
let anothername = myname
anothername = "priyaaa"

// console.log(myname); //priya
// console.log(anothername); //priyaaa

let user1 = {
    email: "priya@gmail.com",
    upi: "xyz@ybl"
}
let user2 = user1
user2.email = "pm@gmail.com"
// console.log(user1.email); //pm@gmail.com
// console.log(user2.email); //pm@gmail.com

// heap k andr jo bhi jata h, uska reference hi milta h