// singleton  /**only one object from constructor */
// Object.create  /**singleton method */



// object literals

const mySymbol = Symbol("key1")


const JsUser = {
    name: "Advaya",  /**name is stored in the form of string i.e. "name" */
    "full name": "Advaya Verma",  /**this cannot be accessed by using `.`because it is defined as string */
    [mySymbol]: "mykey1",
    age: 19,
    location: "Faridabad",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[email]);  /**this will not work because email should be in string format */
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol])

JsUser.email = "abcd@hotmail.com"
// Object.freeze(JsUser)  /**to freeze the changes to the object */
JsUser.email = "abcd@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);  /**this is used to refer to the same object */
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());