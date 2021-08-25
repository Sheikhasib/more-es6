class TeamMember{
    name;  
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime; 
    designation = 'Support Web Dev';  
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a session');
    }
}

// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
//     startSession(){
//         console.log(this.name, 'start a session');
//     }
// }

class StudentCare extends TeamMember{
    designation = 'Care Web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build A e Routine', student);
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Neptune App Web Dev';
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
}

const siddique = new Support('Bodrul Siddique', 'BD', 12);
const amin = new Support('Amin Khan', 'London', 4);
const sagir = new Support('sagir uddin', 'Malaysia', 3);
const kuddus = new Support('kuddus mia', 'Thailand', 7);

const kalia = new StudentCare('Kalia Bhatt', 'Bombay');
const cash = new NeptuneDev('Ash', 'Mars', 'VScode');
cash.releaseApp('1.5.7');
console.log(cash.name);
