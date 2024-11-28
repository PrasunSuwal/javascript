const name = "Prasun"
const age = 21

console.log(`Hello my name is ${name} and my age is ${age}`);

const fullName = new String("Prasun-Suwal")

console.log(fullName[0]);
// console.log(fullName.__proto__);

console.log(fullName.length);
console.log(fullName.toLowerCase());
console.log(fullName.charAt(3));//which character is in that position
console.log(fullName.indexOf('u'));

const newString = fullName.substring(0,4)
console.log(newString);

const anotherString = fullName.slice(-8,6)
console.log(anotherString);


const hello = "    prasun    "
console.log(hello);
console.log(hello.trim());//trims the white space char and new line char i.e /n

const url = "https://prasunsuwal.com/prasun%20suwal"
console.log(url.replace('%20', '-'));
console.log(url.includes('apple'));//to find whether the word is in the string or not

console.log(fullName.split('-'));

