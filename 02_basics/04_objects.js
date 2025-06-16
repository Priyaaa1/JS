// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

// console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "priya",
            lastname: "maheshwari"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname); // priya


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2) // sari values {} isme jayengi
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]
// users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true



const course = {
    coursename: "js tutorial",
    price: "999",
    courseInstructor: "priya"
}
// console.log(course.courseInstructor); // priya

// const {courseInstructor} = course
// console.log(courseInstructor); // priya
//or
// const {courseInstructor: instructor} = course
// console.log(instructor); // priya



// const navbar = ({company}) => {    // de-structuring
// }
// navbar(company = "priya")


//JSON

// {
//     "name": "priya",
//     "coursename": "JS tutorial",
//     "price": "free"
// }

