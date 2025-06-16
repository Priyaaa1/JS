// singleton

// literals se => no singleton
// constructors se => singleton
// Object.create // constructor method

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Priya",
    "full name": "Priya Maheshwari",
    [mySym]: "mykey1",
    age: 20,
    location: "Nagpur",
    email: "pm@xyz.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email); // pm@xyz.com
// console.log(JsUser["email"]); // pm@xyz.com
// console.log(JsUser.full name); // error
// console.log(JsUser["full name"]); // Priya Maheshwari

// console.log(JsUser[mySym]); // mykey1

JsUser.email = "priya@xyz.com"
// console.log(JsUser.email); // priya@xyz.com
// Object.freeze(JsUser)
JsUser.email = "priya@google.com"
// console.log(JsUser.email); // priya@xyz.com
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user");
}
// console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting()); // Hello user

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greeting2()); // Hello Priya