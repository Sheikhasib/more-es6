const numbers = [5, 67, 83, 90, 2, 29, 13];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);

const products = [
    {name:'bottle', price:75, color:'green'},
    {name:'phone', price:29750, color:'black'},
    {name:'smart watch', price:7500, color:'ice blue'},
    {name:'sticky note', price:50, color:'pink'},
]
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);