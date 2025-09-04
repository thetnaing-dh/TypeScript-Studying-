//type declaration
type strOrNum = string | Number;
type infoObj = {name : string; age: strOrNum, job :string};

let getInfo = (name : string, age : number , remark : strOrNum) :void => {
    console.log(`${name} is ${age} years old. ${remark}`);
};

getInfo("Mg Mg",31,"He lives in Myanmar.");

//using Type Alias
let getFullInfo = (info: infoObj):void => {
    console.log(`${info.name} is ${info.age} years old. ${info.job}`);
};

getFullInfo({
    name : "Mg Mg",
    age : 31,
    job : "Software Engineer",
});