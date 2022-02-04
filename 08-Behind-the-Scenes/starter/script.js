'use strict';

// Just for Testing and learning
const userData = [
    {
        'slno': 20,
        'name': 'sourabh',
        'isOnline': true
    }, {
        'slno': 40,
        'name': 'sourabh',
        'isOnline': true
    }, {
        'slno': 20,
        'name': 'sourabh',
        'isOnline': true
    }
]

const userMap = new Map(userData.map(item => [item['slno'], item]))
// function for the unique value store in 2d array
// userData.map(item => userMap.set(item['slno'], item))
console.log(userMap)
