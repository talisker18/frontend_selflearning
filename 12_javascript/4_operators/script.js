var a = "hello world"; //assignment operator
var b = 5;

var c = 50;

console.log(a + b); //concat

console.log(c + b); //addition

console.log(typeof (b+c)); //returns number
console.log(typeof (a+c)); //returns string

console.log(c%b); //modulo

console.log(b++); //returns number and increments after that
console.log(b); //returns 6
console.log(++b); //returns 7 because we incremented it first

b += c; //as in java
console.log(b); 

//comparison operator -> retuns true or false

/**
 * == is equal (without data type check)
 * === identical (equal and same type as well)
 * 
 * --> see from line 47
 * 
 * != not equal
 * !== not identical
 * 
 * ...
 * 
 * 
 */
var d = 10;
var e = 15;

console.log(d == e); //false
console.log(d === e); //also false

console.log(d == 10); //true
console.log(d === 10); //true

//so whats the difference between == and ===
var f = 10;
console.log(f == 10); //true
console.log(f == '10'); //true, because we ignore the type

//...and with === we check the type
console.log(f === '10'); //false