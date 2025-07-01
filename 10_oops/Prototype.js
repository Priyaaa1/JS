let myName = "priya      "

// console.log(myName.length); // 11
// console.log(myName.trim().length); // true length

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.priya = function(){
    console.log(`priya is present in all objects`);
}

// heroPower.priya()  // priya is present in all objects
// myHeros.priya()  // priya is present in all objects
// object ko power dene se array string and functions m bhi wo power hogi

// Array ko power dene se object m jaegi ya ni?

Array.prototype.heyPriya = function(){
    console.log(`Priya says hello`);
}

// myHeros.priya() // priya is present in all objects
// myHeros.heyPriya() // Priya says hello
// heroPower.heyPriya()



// inheritance

const User = {
    name: "sam",
    email: "xyz@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// TeachingSupport inherits the properties of Teacher

let username1 = "Priya   "
String.prototype.trueLength = function(){
    console.log(`${this}`); // Priya 
    console.log(`True length is ${this.trim().length}`); // True length is 5
}

username1.trueLength()
"Priya".trueLength()
"ice".trueLength()