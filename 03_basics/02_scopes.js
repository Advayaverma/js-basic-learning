//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "advaya"

    function two(){
        const website = "w3schools"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "advaya"
    if (username === "advaya") {
        const website = " w3schools"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// 2 types to define functions


console.log(addone(5))   /**this will not show error */

function addone(num){
    return num + 1
}



addTwo(5)  /**this will show error since function is held in a variable */

const addTwo = function(num){
    return num + 2
}
