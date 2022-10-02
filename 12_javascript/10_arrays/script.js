var people = ["Laurence", "John"];
console.log(people[0]);

//get size
console.log(people.length);

//push new value into next available slot
people.push("joel");

console.log(people);

//remove latest value
people.pop();

console.log(people);

//convert array to string
var str = people.toString(); //default separator is ','
console.log(str);
str = people.join("*"); //define own separator, in this case *
console.log(str);

//string to array
var str2 = 'hello1,hello2,hello3';
var arr1 = str2.split(','); //separator ','
console.log(arr1);

//remove first element
people.shift();
console.log(people);

//add on first place
people.unshift("Laurence");
console.log(people);

//remove item at specific place so that it is null/empty 
people.push("hello");
delete people[1];
console.log(people);

//fill in new value to the empty array place
people[1] = "test";
console.log(people);

//get index of test string
console.log(people.indexOf("test"));
//if value is not present, the returned value is -1

//reverse order of array
console.log(people.reverse());


/*arrays in array and objetcs in arrays
*
*
*
*
*
*/

var arr2 = [
    ["A","B","C"],
    [1,2,3,4]
];

console.log(arr2[0][1]); //print B from first array
console.log(arr2[1][1]); //print 2 from second array


//objects in array
var arr3 = [
    {
        people1:{
            name:"John",
            age:30
        }
    },
    {
        people2:{
            name:"Jane",
            age:30
        }
    }
];

//use array as value of a json object
var obj1 = {
    set1: [1,2,3],
    set2: [4,5,6]
};

//change value
obj1.set1[0] = 100;
console.log(obj1.set1[0]);