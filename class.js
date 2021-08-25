class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a session');
    }
}
const siddique = new Support('Bodrul Siddique', 'BD');
const amin = new Support('Amin Khan', 'London');
const sagir = new Support('sagir uddin', 'Malaysia');
const kuddus = new Support('kuddus mia', 'Thailand');
siddique.startSession();
amin.startSession();
console.log(siddique, amin, sagir, kuddus);