const name = "Advaya"
const repoCount = 4

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Advaya-verma')

// console.log(gameName[0]);
// console.log(gameName.__proto__);    /* To access prototype */


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));    /* To find character at a position */
console.log(gameName.indexOf('v'));  /* To find index of a particular character */

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 6)     
                                                 /* the slice() function is used to extract a section of
                                                 a string (or an array) and return it as a new string,
                                                 without modifying the original one. */


console.log(anotherString);
/* let text = "JavaScript";

console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6));     // "Script"
console.log(text.slice(-6, -3)); // "Scr" 
*/




const newStringOne = "   advaya    "
console.log(newStringOne);
console.log(newStringOne.trim());  /* trim removes the spaces at start and end */

const url = "https://abcdefgh.com/xyz%20pqrs"

console.log(url.replace('%20', '-'))

console.log(url.includes('xyz'))  /* to check if it is included in the string */

console.log(gameName.split('-'));  /* The split() method of String values takes
                                     a pattern and divides this string into an ordered list 
                                     of substrings by searching for the pattern, puts these substrings
                                     into an array, and returns the array. */

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
