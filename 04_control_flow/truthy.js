const userEmail = "prasun@gmail.com"

if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("email not found");
    
}

//falsy values => false, 0, -0, BigInt(0n), "", null, undefined, NaN

//truthy values =>"0",'false', " ", [], {}, function(){}

const email = []

if (email.length  === 0) {
    console.log("array is empty");
       
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //it safety checks the null and undefined
// val1 = undefined ?? 25
val1 = null ?? 10 ?? 15
console.log(val1);

//Ternary Operator 

// condition ? true : false

const price = 100

price <=80 ? console.log("less than 80") : console.log("more than 80");


