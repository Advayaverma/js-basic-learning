// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());


console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 20)   /* the last number declares the no of days in year */
// let myCreatedDate = new Date(2025, 6, 7, 4, 13) /* this declares time as well */
// let myCreatedDate = new Date("2025-06-24")
// let myCreatedDate = new Date("07-15-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "short"
    
}))

