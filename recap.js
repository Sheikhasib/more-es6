//1. let and const
const matha = 'ghorar-dim';
let phone = 'Iphone infinity';
phone = 'Samsung A7';
// 2. default parameter
// 5.spread or three dots(...)
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. template string
const myNotes = `He is a ${matha}. `;
console.log(myNotes);

// 4arrow function
const square = x => x * x;
console.log(square(8));
