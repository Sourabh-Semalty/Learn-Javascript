'use strict';

const calcBirth = (birthYear) => {
    return new Date().getFullYear() - birthYear;
};
const Person = function (fname, lname, birthYear) {
    // Instance Properties
    this.fname = fname;
    this.lname = lname;
    this.birthYear = birthYear;
};


const sourabh = new Person('Sourabh', 'Semalty', 1998);
console.log(calcBirth(sourabh.birthYear));