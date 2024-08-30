

// Method getElementById()
let msg = document.getElementById("message");  // Returns element based on id name
console.log(msg);



//Method getElementByName 
let btn = document.getElementsByName("language") //Returns input elements based on name
console.log(btn);


// Method getElementsByTagname
let heading = document.getElementsByTagName('h1')  // Returns element based on Tag Name
console.log(heading);


// Method getElementByClassName

let msgs = document.getElementsByClassName("messages"); // Returns element based on class name
console.log(msgs);



let message = document.querySelector(".messages") // Returns only first element 
let messages = document.querySelectorAll(".messages") // Returns All the elements releted to keywords
console.log( message, messages);











