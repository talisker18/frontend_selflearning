var a = "hello world see";
console.log(a.indexOf("see"));
console.log(a.startsWith("hello"));
console.log(a.endsWith("see"));
console.log(a.length);
console.log(a.replace("see", "saw"));
console.log(a.slice(10, 15)); //start and end
console.log(a.substring(0, 5)); //start and end
console.log(a.toLowerCase());
console.log(a.toUpperCase());

console.log(a[0]); //access chars by array index
var arr = a.split(" "); //each word is in an array index
console.log(arr[0]);