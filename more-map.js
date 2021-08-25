const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Hardy'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name:'bottle', price:75, color:'green'},
    {name:'phone', price:29750, color:'black'},
    {name:'smart watch', price:7500, color:'ice blue'},
    {name:'sticky note', price:50, color:'pink'},
]
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);