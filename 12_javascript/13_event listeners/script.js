var output = document.getElementById('hello');
output.addEventListener('click', function(){ //anonymous function
    console.log("clicked");
});

var updated = document.getElementById("output");

function upText(){
    var holder = document.getElementById("newTxt");
    updated.innerHTML = holder.value; //update the output element
    console.log(holder.value);
}

var listItems = document.getElementsByTagName("li");

for(var i=0; i<listItems.length; i++){
    listItems[i].onmouseover = function(){
        this.style.backgroundColor = "red"; //this referring to listItems[i] 
    }
    listItems[i].onmouseout = function(){
        this.style.backgroundColor = "white";
    }
}

//image popup window
var imgList = document.getElementsByTagName("img");

for(var i=0; i<imgList.length; i++){
    imgList[i].onclick = function(){
        window.open(this.src,"img in new window");
    }
}