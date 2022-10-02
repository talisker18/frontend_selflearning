/**
 * 
 * loop objects
 * 
 * 
 * 
 */

const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15
};

// convert object to key's array

const keys = Object.keys(courses);

// print all keys

console.log(keys);

// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object

keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});

// java: 10

// javascript: 55

// nodejs: 5

// php: 15

console.log('-------------------');

const animals = {
    tiger: 1,

    cat: 2,

    monkey: 3,

    elephant: 4
};

// iterate over object values

Object.values(animals).forEach(val => console.log(val));

// 1
// 2
// 3
// 4

console.log('-------------------');

//or use normal for loop
for(animal in animals) { //animal is the key
    console.log(`${animal}: ${animals[animal]}`);
}


console.log('-------------------');


/**
 * loops arrays
 * 
 * 
 */

 var myStringArray = ["Hello","World"];
 var arrayLength = myStringArray.length;
 for (var i = 0; i < arrayLength; i++) {
     console.log(myStringArray[i]);
     //Do something
 }

