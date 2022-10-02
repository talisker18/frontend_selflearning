function myFun(a,b){
    console.log(a+b);
    //a = local var
    return a+b+'!!!';
}

var str=myFun("hello","world");
console.log(str);

function add(array, newVal){
    array.push(newVal);
}

var arr1 = [1,2,3];
add(arr1,4); //js is also passing by value, like java
console.log(arr1);


var str = "hello"; //global var

function changeString(string){
    string = string+" world"; // string is local var
}

console.log(str); //str was not changed, because its passed by value: local 'string' var will point to string+" world" object, but this is not the case for 'str' var


/**
 * self executing functions (anonymous). 
 * 
 * 
 */
(function(a){
    console.log(a);
})("self executing functions"); //the actual call happens on this line