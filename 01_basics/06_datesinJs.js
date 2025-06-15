let myDate = new Date()
// console.log(myDate); // 2025-06-15T20:20:02.227Z
// console.log(myDate.toString()); // Sun Jun 15 2025 20:21:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Jun 15 2025
// console.log(myDate.toLocaleString()); //6/15/2025, 8:24:10 PM
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString()); // Thu Jan 23 2025
// console.log(myCreatedDate.toLocaleString()); // 1/23/2025, 5:03:00 AM

let myCreatedDate1 = new Date("2025-01-15")
// console.log(myCreatedDate1.toLocaleString()); // 1/15/2025, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTi/meStamp); // 1750019666060 
// console.log(myCreatedDate1.getTime()); // 1736899200000

console.log(Date.now()); // 1750019918088
// console.log(Math.floor(Date.now()/1000)); // 17500199904

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); 
