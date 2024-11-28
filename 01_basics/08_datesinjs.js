//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0, 25)
// let myCreatedDate = new Date(2024, 0, 25, 5, 3)
let myCreatedDate = new Date("2024-11-28")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
     
})



