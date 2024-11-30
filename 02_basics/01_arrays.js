// arrays are resizeable i.e add can be added into the array

//shallow and deep copy

//shhalow copy means properties share same reference 
//in array it creates shallow copy


const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4)//this another method of declaring array

// console.log(myArr[0]);

//Array methods
myArr.push(6)
myArr.push(7)//to add value to the array
myArr.pop()//last value of array is removed

// myArr.unshift(9)//adds element at the first of the array
// myArr.shift()//removes the 1st element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


//slice, splice
console.log("A", myArr);
 
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

