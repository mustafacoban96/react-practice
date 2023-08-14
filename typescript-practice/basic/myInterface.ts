interface User {
    readonly dbId:number,
    email: string,
    userId:number,
    googleId?:string,

    //startTrail: () => string
    startTrail():string
    getCoupon(couponname:string,value:number):number
}


// vs Type
interface User{
    githubToken:string
}

interface Admin extends User{
    role:"admin" |'ta' | 'learner'
}

// const hitesh: User = {
//     email:"h@h.com", 
//     userId:2211,dbId:22, 
//     startTrail: () =>{
//     return 'asdasd'
//     }, 
//     getCoupon: (name:'asdasdsa',value:12) =>{
//     return 22
//     },
//     githubToken:"wqq2232qaa23saw2qqasd"
// }

const hitesh: Admin = {
    email:"h@h.com", 
    userId:2211,dbId:22, 
    startTrail: () =>{
    return 'asdasd'
    }, 
    getCoupon: (name:'asdasdsa',value:12) =>{
    return 22
    },
    githubToken:"wqq2232qaa23saw2qqasd",
    role:'learner'
}