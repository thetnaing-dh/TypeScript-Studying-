//String
let person = "Mg Mg";
person = "Kyaw Kyaw";
console.log(person);

//Number
let num = 30;
num = 31;
console.log(num);

//Boolean
let isPassed = false;
isPassed = true;

//String Array
let persons = ["Mg Mg", "Kyaw Kyaw"];
persons.push("Hla Hla");
console.log(persons);

//Number Array
let numbers = [1,2,3,4,5];
numbers.unshift(0);
console.log(numbers);

//Mixed Array
let mixed = [0,1,2,"Mg Mg","Kyaw Kyaw",false];
mixed.push(3);
mixed.push("Hla Hla");
mixed.push(true);

//Object
let personObj = {
    name: "Mg Mg",
    age: 31,
};

personObj.name = "Kyaw Kyaw";
console.log(personObj.name);

let workers : string[];
workers = ["Mg Mg","Kyaw Kyaw"];

let nums : number[];

let bools : boolean[];

//union type array
let mixArray : (string |boolean | number)[];
mixArray = [true, "Hla Hla", 3];
console.log(mixArray);

//object 
let personOne : {
    name : string,
    age : number,
};

personOne = {
    name : "Ko Ko",
    age : 20,
};
console.log(personOne);

//Any Data Type
let anyVariable : any;
anyVariable = "Hello";
anyVariable = 5;
anyVariable = false;

//Any Array
let anyArray : any[];
anyArray = ["Hello",5,true];
console.log(anyArray);

//Object
let anyPerson : {
    name : any,
    age : any,
};

anyPerson = {
    name: "Mg Mg",
    age: 20,
};
console.log(anyPerson.name);

//function
const add = (a : number , b : number, c?: number) : void => {
    console.log (a + b );
};

//Function return type
const minus = (a:number, b:number) : number => {
    return a - b;
};

add(18,35);

console.log(minus(15,7));

// auto compile to JavaScript : tsc -w 
let logger = () : void => {
    console.log("I am logger fucntion.");
};
logger(); 
// auto run command : node --watch index.js

//Tuple
let myTuple : [number,string,boolean];
myTuple = [1,"abc",true];
console.log(myTuple[2]);

//import User Interface
import { User }  from "./user";
let userOne : User = {
    name:"Ko Aung",
    email:"aung@mail.com",
    phone:"091234",
    isLogin : () => true,
    getAge : () => 20,   
    canDrive: () => true,
};
console.log(userOne);

//extend User interface 
interface Editor extends User{
    addUser(): boolean;
};

//extend Editor interface that included User interface
interface Admin extends Editor {
      deleteUser(): boolean;
};

let adminOne : Admin = {
    name : "Mg Oo",
    email: "mgoo@mail.com",
    phone: "094111",
    isLogin : () => true,
    getAge : () => 20,   
    canDrive: () => true,
    addUser: () => true,
    deleteUser: () => true,
};
console.log(adminOne);

//Read-Only Property
interface Animal {
    name : string;
    readonly type : string;
}

