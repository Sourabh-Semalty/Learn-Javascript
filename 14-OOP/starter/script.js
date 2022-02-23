'use strict';

const Person = function (fname, lname, birthYear) {
    // Instance Properties
    this.fname = fname;
    this.lname = lname;
    this.birthYear = birthYear;
};

const sourabh = new Person('Sourabh', 'Semalty', 1998);

// Prototypes
Person.prototype.calcAge = function () {
    return new Date().getFullYear() - this.birthYear;
};
console.log(sourabh.calcAge());