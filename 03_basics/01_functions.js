// console.log("P");
// console.log("r");
// console.log("a");
// console.log("s");
// console.log("u");

function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("s");
    console.log("u");

}
// sayMyName(); //function execution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }
function addTwoNumbers(num1, num2){
    let result = num1 +   num2
    return result
    //return num1 + num2
    // console.log("Prasun")//after the return nothing is executed in the function
}

const result = addTwoNumbers(2,3);
// addTwoNumbers(2,"3");//performs concat
// console.log("Result:", result);//returns undefined

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("prasun"));
// console.log(loginUserMessage());//if you dont pass anything it will give undefined

//for checking undefiend 
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }  
    return `${username} just logged in` 
}
// console.log(loginUserMessage("prasun"));
// console.log(loginUserMessage())

function calculateCartPrice(...num1){//to pass multiple value in function
    return num1
}
// console.log(calculateCartPrice(200,500,300))


const user = {
    username : "prasun",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"ram",
    price: 150
})

const myArray = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,600]));

