let a = 300//global scope
if (true) {
    let a = 10//block scope
    const b = 5
    console.log("INNER:",a);
    
}
console.log(a);

function one(){
    const username = "prasun"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "prasun"
    if (username == "prasun") {
        const website = " github"
        //console.log(username + website) // only this is executed
    }
    // console.log(website);//it is not executed as it is out of the block
    
}
// console.log(username);


//++++++++++++++interesting+++++++++++++++

addOne(5)//this can be done as the value is not hold by any variable
function addOne(num){
    return num + 1
}


// addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)//addTwo cannot access before initialization