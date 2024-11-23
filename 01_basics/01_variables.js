const accountId = 974566
let accountEmail = "prasun@gmail.com"
var accountPassword = "1234"
accountCity = "KTM"//this can be used but not a good practice
let accountState;//value is undefined if we dont allocate any value 

//prefer not to use var becoz of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity])