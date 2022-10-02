var a = "hello world";
console.log(a); //or directly write 'a' in the console and hello world will be printed

var b = 'hello';

//multiple definitions
var z, y = 1, w = "hello";

/*variable rules*/

//you cant define a variable starting with a number!
// _ and $ are allowed as starting sign

/* 
null vs undefined

*/

// we can use typeof function to check
var c;
console.log(typeof c); //undefined

var d = true;
console.log(typeof d);

c="hello";
console.log(typeof c);
var e = 100;
console.log(typeof e);

var f = null;
console.log(typeof f); //returns object

//null vs undefined
console.log(null === undefined); //false
console.log(null == undefined); //true