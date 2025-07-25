const user = {
    username: "advaya",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "superman"
// user.welcomeMessage()

// console.log(this);

// function hello(){
//     let username = "advaya"
//     console.log(this.username);   /**can be used only in object not in function */
// }

// hello()

// const hello = function () {
//     let username = "advaya"  
//     console.log(this.username);   /**can be used only in object not in function */
// }


//////////ARROW FUNCTION 

const hello =  () => {
    let username = "advaya"
    console.log(this);
}


// hello()

// const addTwo = (num1, num2) => {          /**if we use "{}" we have to use return */
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "advaya"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()