//var yourname = prompt("put in your name");
//document.write("hello "+yourname); //write into html document

//DOM is a javascript object. print it with dir
console.dir(document);
//now look at that object and print e.g. URL
console.log(document.URL);

//get first child of DOM
console.log(document.children[0]); //html node
console.log(document.children[0].children[0]); //head node
console.log(document.children[0].children[0].children[2].childNodes[0]); //get title text
document.children[0].children[0].children[2].childNodes[0].nodeValue = "changed"; //change title text

//Window Object Model (WOM)
console.dir(window); //this contains, among other things, the DOM object

//write content into DOM
document.write("hello again");

/*
create new element


*/
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hi there and greetings!");
newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

// füge das neu erstellte Element und seinen Inhalt ins DOM ein
var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);


//locate element by id
document.getElementById("output").innerHTML = "hello update";
//instead of innerHTML you can also use: document.getElementById("output").childNodes[0].nodeValue = "hello update";
var updated = document.getElementById("output");
console.dir(updated);

//get value of input element

function upText(){
    var holder = document.getElementById("newTxt");
    updated.innerHTML = holder.value; //update the output element
    console.log(holder.value);
}

/**
 * 
 * 
 * 
 */

/**
 * 
 * remove element
 * 
 * 
 */

function removeElementById(id){
    var holder = document.getElementById(id);
    if(holder){
        holder.parentNode.removeChild(holder);
    }
}

//removeElementById("div1");

/**
 * 
 * 
 * 
 * 
 */



//grab by tag name
var listItems = document.getElementsByTagName("li");

for(var i = 0; i< listItems.length; i++){
    listItems[i].innerHTML = "item"+i;
}

listItems[1].innerHTML = "updated";

//get img element...the img element has the attribute src, print that
var images = document.getElementsByTagName("img");
console.dir(images[0].src);

//get by class
var someClass = document.getElementsByClassName("someClass");
console.dir(someClass);

console.log('---------------');

//query selector
var a = document.querySelector('.someClass'); // like in CSS '.' is class. return first occurrence
console.dir(a);

console.log('---------------');

a=document.querySelectorAll('.someClass'); // all occurrences
console.dir(a);

//other selectors
var b = document.querySelectorAll('div');

console.log('---------------');

console.dir(b);

var c = document.querySelectorAll('div p');

console.log('---------------');

console.dir(c);

console.log('*******************');

//traversing the DOM
var d = document.querySelector('#traversalDemo');
console.dir(d);
//--> get last child
console.dir(d.firstChild.nextSibling); //first child is empty because of linebreak...then get the next sibling, which is the 1st para
console.dir(d.firstChild.nextSibling.nextSibling.previousSibling); //back and forth!

console.log('*******************');

//update css
var e = document.getElementById('traversalDemo');
e.style.backgroundColor = "red";
e.style.border = "3px solid black";