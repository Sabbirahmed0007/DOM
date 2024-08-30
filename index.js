

// Method getElementById()
let msg = document.getElementById("message");
console.log(msg);



//Method getElementByName 
let btn = document.getElementsByName("language")
console.log(btn);


// Method getElementsByTagname
let heading = document.getElementsByTagName('h1')
console.log(heading);


// Method getElementByClassName

let msgs = document.getElementsByClassName("messages");
console.log(msgs);



let message = document.querySelector(".messages") // Returns only first element 
let messages = document.querySelectorAll(".messages") // Returns All the elements releted to keywords
console.log( message, messages);











