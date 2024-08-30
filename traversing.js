

// parent node property

let txt = document.querySelector(".text");
console.log(txt.parentNode );



////////// Child elements

let parent = document.querySelector(".title");
console.log(parent.firstElementChild);  // Returns the first element
console.log(parent.lastElementChild);  // Returns the last element  
console.log(parent.childNodes);


// The previous child elements, the next child elements

let second = document.querySelector(".second");
// console.log(second.previousSibling);
console.log(second.previousElementSibling);  //returns the previous child
console.log(second.nextElementSibling);  // Returns the next chid element














