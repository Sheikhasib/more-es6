const fish = {id: 57, name:'king Hilsha' , price:12000, phone:'01710000000', address:'Chandpur', dress:'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, id, price, dress} = fish;

console.log(phone,price);
console.log(phone, id);
console.log(phone, dress);
console.log(phone, price);
console.log(phone);

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

// const work = company.web.work;
// const framework = company.web.framework;

const {work, framework} = company.web;
const {food} = company.ceo;
const {first, second} = company.web.tech;
console.log(work, framework, food, first, second);