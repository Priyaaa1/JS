function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}
// sayMyName()

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// const result = addTwoNum(3, 4)  // 7
// console.log("Result: ", result); // Result:  undefined


function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result
}
const result = addTwoNum(3, 4)
// console.log("Result: ", result); // Result:  7


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Priya")); // Priya just logged in
// console.log(loginUserMessage()); // undefined just logged in


// function calculateCartPrice(...number1){ // rest operator
//     return number1
// }
// console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]
 
function calculateCartPrice(val1, val2, ...number1){ // rest operator
    return number1
}
console.log(calculateCartPrice(200, 300, 400, 2000)); // [ 400, 2000 ]


const user = {
    username: "priya",
    prices: 199
}
function handleObject(anyobject){
    console.log((`Username is ${anyobject.username} and price is ${anyobject.price}`));   
}
// handleObject(user) // Username is priya and price is undefined
handleObject({
    username: "sam",
    price: 399
})  // Username is sam and price is 399


const myNewArray = [200, 400, 100, 600]

function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(myNewArray)); // 400
