"use strict";
class User {
    constructor(email, name) {
        this.city = "ankara";
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    get getUserEmail() {
        return `user${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const hitesh = new User('asdasdasd', 'asdasdasda');
console.log(hitesh.city);
