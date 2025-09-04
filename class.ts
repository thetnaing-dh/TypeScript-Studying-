class Details{
    public name : string;
    readonly age : number;
    private job : string;

    constructor(n:string, a:number, j:string){
        this.name = n;
        this.age = a;
        this.job = j;
    }

    getDetails(){
        console.log(`${this.name} is ${this.age} years old and a ${this.job}`);
    }
}

const myDetails = new Details("Mg Mg",31,"Software Engineer");

myDetails.getDetails();

const myFriend = new Details("Ko Ko",31,"Web Developer");

//class array
let detailArray: Details[] = [];
detailArray.push(myDetails,myFriend);
console.log (detailArray);

