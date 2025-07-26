// Immediately Invoked Function Expressions (IIFE)


(function hello(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

///////always end IIFE using ';'

( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
} )("advaya")

