// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Advaya"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "advaya",
            lastname: "verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                          /**problem object inside object  */
// const obj3 = Object.assign({}, obj1, obj2, obj4)     /**first parameter is target rest source */

const obj3 = {...obj1, ...obj2}  //spread operator "..."

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS",
    price: "100",
    courseInstructor: "advaya"
}

// course.courseInstructor

// ********************************** 


// OBJECTS DESTRUCTURING

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course  /**courseInstructor as instructor */
console.log(instructor);

// console.log(courseInstructor);
// {
//     "name": "advaya",
//     "coursename": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

