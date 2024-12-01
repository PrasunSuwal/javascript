const user = {
    username: "prasun",
    price: 100,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)//this talks about the current context
        
    }
}

// user.welcomeMessage()

// user.username = "ram"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "prasun"
//     console.log(this.username);
    
// }
// chai()



//arrow function
const chai = ()=>{
    let username = "prasun"
    console.log(this);
}
chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) =>({username : "prasun"})//to return obj it must be wrapped in parenthesis

console.log(addTwo(5,5))


// const myArray = [2,6,8,9,8]

// myArray.forEach(()=>{})