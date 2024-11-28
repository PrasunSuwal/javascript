const score = 100
console.log(score);

const balance = new Number(50000)//explicitly declaring what data type we want by using new keyword
console.log(balance);

console.log(balance.toString().length);//changing the number into a string we use toString()
console.log(balance.toFixed(2)); // for the value after point

const number = 333.145678
console.log(number.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// to make long numbers easier to read





//++++++++++ MATHS IN JS ++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));//ceil and floor can also be used

console.log(Math.sqrt(81));

//min and max are also some propeties of math library in js

console.log(Math.random());//val is between 0-1
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min +1)) + min);
