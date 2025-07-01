class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const sam = new Teacher("Sam", "sam@google.com", "123")
sam.addCourse() // A new course is added by Sam

const pri = new User("Pri")
// pri.addCourse() // error (not a function)
pri.logMe()

console.log(sam instanceof User); // true