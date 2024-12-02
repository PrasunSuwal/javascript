//if
const isUserLoggedIn = true
const temperature = 41
if (temperature < 50 ) {
    console.log("less than 50"); 
}else{
    console.log("temp is greater than 50 ")
}
// console.log("temp is greater than 50 ")//this is surely executed as it is outside if statement


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
    
}
// console.log(`user power: ${power}`)//it gives error as it is outside our scope


//short-hand notation

const balance = 1000
// if(balance > 500) console.log("test"), console.log("hello");//dont use this type

//NESTED IF ELSE 

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 750");   
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }



