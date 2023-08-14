// const User = {
//     name:"hitesh",
//     email:"hitesh@lco.dev",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean}){}

// createUser({name:"mustafa",isPaid:true});


// function createCourse():{}{
//     return {name:"reactjs",price:399}
// }


///////////////type alias

// type MyString = string;

// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }


// function createUser(user: User){}


//////////////////////////// readonly
// type User = {
//     readonly _id: string;
//     name:string;
//     email:string;
//     isActive:boolean;
//     creditCard?: number
// }

// let myUser : User ={
//     _id:"1234",
//     name:"qw",
//     email:"h@w",
//     isActive:true

// }

// myUser.email="h@mail.com"
// /////// &
// type cardNumber = {
//     cardnumber:number
// }
// type carDate = {
//     cardDate:string
// }
// type CardDetails = carDate & cardNumber &{
//     cvv: number
// }

export {}