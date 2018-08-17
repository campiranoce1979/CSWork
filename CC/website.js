function changeColor() {

    var colorValue = prompt("What color do you want boss");
    document.body.style.backgroundColor = colorValue;
}


function changeTextColor() { 

    var colorValue = prompt("What color do you want boss");
    document.body.style.color = colorValue;

}

function changeTextsize() {
    var size = prompt("What fontsize do you want boss");
    document.body.style.fontSize = size;
}

function changeTextfont() {
    var font = prompt("What fontsize do you want boss");
    document.body.style.font = font;
}

function welcomeMessage() {  
    var name = prompt("What is your nickname?");
    var message = "<h1>Hello " + name + "&#x263A";
    document.getElementById("line1").innerHTML = message;
}