const score = 400
// console.log(score); //400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNum = 123.8966
// console.log(otherNum.toPrecision(4)); // 123.9
// console.log(otherNum.toPrecision(3)); // 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ************** Maths ******************************

// console.log(Math); // Object [Math] {}

console.log(Math.random());

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
