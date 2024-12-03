//for of
// ["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map()
map.set('NP', "Nepal")
map.set('IN', "INDIA")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}