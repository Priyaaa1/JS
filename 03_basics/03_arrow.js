const user = {
    username: "priya",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg()  // priya, welcome to website
// user.username = "sam"
// user.welcomeMsg()  // sam, welcome to website

// console.log(this); // {}


// function one() {
//     let username = 'priya'
//     console.log(this.username);
// }
// one()  // undefined

// const one = function () {
//     let username = 'priya'
//     console.log(this.username);
// }
// one()  // undefined

// const one = () => {
//     let username = 'priya'
//     console.log(this.username);
// }
// one()  // undefined


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4)); // 7

const addTwo = (num1, num2) => ({username: "priya"}) // object return krne k liye parenthesis lgana pdega
console.log(addTwo(3, 4)); // { username: 'priya' }