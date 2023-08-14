class User { 
    private email: string
    readonly city: string = "ankara"
    private name: string
    private _courseCount = 1
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }

    get getUserEmail(): string{
        return`user${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }
     
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}

const hitesh = new User('asdasdasd','asdasdasda');
console.log(hitesh.city)