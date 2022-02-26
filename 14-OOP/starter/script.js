'use strict';

// const Person = function (fname, lname, birthYear) {
//     // Instance Properties
//     this.fname = fname;
//     this.lname = lname;
//     this.birthYear = birthYear;
// };

// const sourabh = new Person('Sourabh', 'Semalty', 1998);

// // Prototypes
// Person.prototype.calcAge = function () {
//     return new Date().getFullYear() - this.birthYear;
// };
// console.log(sourabh.calcAge());

// console.log(Person.prototype.isPrototypeOf(sourabh.prototype))




class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }

    // get age() {
    //     return 2037 - this.birthYear;
    // }

    // set fullName(name) {
    //     if (name.includes(' ')) this._fullName = name;
    //     else alert(`${name} is not a full name`);
    // }
    // get fullName() {
    //     return this._fullName;
    // }
    static hey() {
        console.log('Hi they 🧕')
    }
}

const sourabh = new PersonCl('Sourabh Semalty', 1998)
PersonCl.hey()
// sourabh.calcAge();
// console.log(sourabh.age);


// console.log(sourabh.__proto__ === PersonCl.prototype);

// // 1. New { } is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
// const neeraj = new PersonCl('Neeraj P', 1998)

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make + ' has increase speed of ' + this.speed}`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make + ' has deceased speed of ' + this.speed}`);
// }

// const bmw = new Car('BMW', 120);
// const mrc = new Car('Mercedes', 95);


// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

// bmw.brake();




// const data = [
//     ['2022-02-23', 1],
//     ['2022-02-22', 13],
//     ['2022-02-21', 11],
//     ['2022-02-20', 10],
// ]

// const today = new Date();
// const dates = {};
// for (let i = 0; i < 30; i++) {
//     var priorDate = new Date(new Date().setDate(today.getDate() - i));
//     const fullDate = priorDate.getFullYear() + '-' + (priorDate.getMonth() + 1) + '-' + priorDate.getDate();
//     dates[fullDate] = 0;
// }

// data.forEach(element => {
//     dates[element[0]] = element[1]
// });
// console.log(dates)




// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make + ' has increase speed of ' + this.speed}`);
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make + ' has deceased speed of ' + this.speed}`);
//     }
//     get speedUs() {
//         return (this.speed / 1.6) + ' mi/h';
//     }
//     set speedUs(curspeed) {
//         this.speed = (curspeed * 1.6);
//     }
// }


// const ford = new Car('Ford', 120)
// ford.accelerate()
// ford.brake()
// ford.accelerate()

// console.log(ford.speedUs)

// ford.speedUs = 190
// console.log(ford.speedUsj);

// 1. classes are not hoisted
// 2. classes are first-class function -> means we can call inside the function and return them because it is special type of function
// 3. classes always run in strict mode
