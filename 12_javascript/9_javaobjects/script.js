//objects in JS are k/v pairs

var person = {};

//assign values
person.firstName = 'John';
person.lastName = 'Doe';

console.log(person);
console.log(person.firstName);

var person2 = {
    firstName: 'Joel',
    lastName: 'Henz'
};

console.log(person2);

//wen we use 'document.write', this is also an object

//other
console.log("printing with array and key");
var friends = {
    name1: 'John',
    name2: 'Doe',
    name3: 'Henz'
};

console.log(friends['name1']);
console.log(friends['name2']);

/**objects within objects */

var people = {
    'person3':{ //we can also use '' for keys
        name:"Mike",
        age: 30
    },
    person4:{
        name:"Jane",
        age: 40
    }
};

console.log(people['person3'].name);
console.log(people.person3.name);

//update a property
people.person3.age = 50;