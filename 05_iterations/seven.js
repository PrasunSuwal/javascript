const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval :${currval}`);
    
//     return acc + currval
// }, 0)//  '0' is the initial value

const myTotal = myNums.reduce((acc, currval)=>(acc + currval),0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "apple",
        price: 120
    },
    {
        itemName:"banana",
        price: 100
    },
    {
        itemName:"watermelon",
        price: 250
    }
]
const priceToPay = shoppingCart.reduce((acc, item)=>acc + item.price,0)
console.log(priceToPay);
