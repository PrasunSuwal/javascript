// Object.create//constructor method

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Prasun",
    "full name":"Prasun Suwal",
    [mySym]: "myKey1",
    age: 21,
    location: "KTM",
    email: "prasun.suwal@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(jsUser.email);//one way of accessing objects
console.log(jsUser["email"]);//another way of accessing objs
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "pkdg@gmail.com"
// Object.freeze(jsUser)//nochanges can occur it freezes the object
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser!!");
}
jsUser.greeting2 = function(){
    console.log(`Hello jsUser!!, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());