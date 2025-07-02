class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value  // setters don't be returned
    }
}

const priya = new User("priya@p.ai", "abc")
console.log(priya.password); // ABC
console.log(priya.email); // PRIYA@P.AI