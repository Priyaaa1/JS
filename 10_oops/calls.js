function setUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    // setUsername(username) // reference gya h, call ni hua
    setUsername.call(this, username) // reference hold krne k liye
    
    this.email = email
    this.password = password
}

const sam = new createUser("Sam", "sam@google.com", "123")
console.log(sam);
