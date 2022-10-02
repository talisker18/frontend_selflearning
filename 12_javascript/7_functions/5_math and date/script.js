
/**math
 * 
 * 
 * 
 */
var a = 4.5;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.random()); 
console.log(Math.floor(Math.random() * 100)); //from 0 to 99

/**
 * 
 * date
 * 
 * 
 */

console.log(Date());

var date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getTime());
console.log(date.getUTCDate());

//setters
date.setMonth(6);

console.log(date.toDateString());
console.log(date.toJSON());
