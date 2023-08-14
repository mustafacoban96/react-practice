
//declear type.
let greetings: string = "Hello hitesh";

let sayi: number = 2222;

let isLoggedIn: boolean = false;
//greetings = 5 return error real-time
console.log(greetings);


//any 
// any isn't type-checked.


//function
function addTwo(num:number): number{
    return num +2;
    //return 'asdasd'
}
addTwo(2);

function signUp(name:string,email:string,isPaid:boolean){}
let  loginUser = (name:string,age:number,isPaid:boolean = false) =>{}

// func part 2

function consoleError(errmsg:string): void{
    console.log(errmsg)
}

// terminate execution.
function handleError(errmsg: string):never{
    throw new Error(errmsg);
}
export {}