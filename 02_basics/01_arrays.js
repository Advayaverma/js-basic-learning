// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Goku", "Luffy"]

const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray[1]);

// Array methods

// myArray.push(6)  /**add element to the end of array */
// myArray.push(7)
// myArray.pop()   /**remove element from end of array */

myArray.unshift(4)  /*add element in start of array */
myArray.shift()   /* remove element from start of array */

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArray = myArray.join()  /**joins the array elements in the for of a string */

console.log(myArray);
console.log(newArray);


// slice, splice

console.log("A ", myArray);

const arr1 = myArray.slice(1, 3)

console.log(arr1);
console.log("B ", myArray);


const arr2 = myArray.splice(1, 3)
console.log(arr2);
console.log("C ", myArray);
