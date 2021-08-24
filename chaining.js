// declare variable based on the name of tan object property
const myObject = {a:3, b:2, x:5, y:8, z:10};
const {x, b} = myObject;
// console.log('myObject.p: ', myObject?.p?.q);

// destructuring array
const [p, q] = [45, 37, 88, 37];
// console.log(p,q);

const [max,min] = [34, 87];
// console.log(max, min);
const {sky, color} = {sky:'blue', soil:'mati', color:'khaki', money:200};
// console.log(sky, color);

// Chaining
const company = {
    name: 'Robi',
    ceo: {id: 3, name:'Fazle', food:'fuchka'},
    web: {
        work:'wev development',
        employee: 22, 
        framework:'react JS',
        tech:{
            first:'html',
            second:'css', 
            third:'js'}}
};
console.log((company?.web?.tech?.third));
console.log((company?.backend?.tech.third));