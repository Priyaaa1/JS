var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a); // 10
}

// console.log(a); // 100
// console.log(b);
// console.log(c); // 30


function one(){
    const username = "priya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(true){
    const username = "priya"
    if(username === "priya"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);


addOne(5)
function addOne(num){
    return num + 1
}
 
addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// hoisting