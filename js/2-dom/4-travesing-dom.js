

let val;

const list = document.querySelector(".collection");
const firstListItem = document.querySelector("li:nth-child(1)");
const lastListItem = document.querySelector("li:nth-child(5)");

val = list;

// Get the children element node
val = list.children[0].children[0];


// First child
val = list.firstElementChild;

// last Child
val = list.lastElementChild;

// Child count
val = list.childElementCount;

// Get a parent node
val = list.parentElement.parentElement.parentElement.parentElement
.parentElement.parentElement.parentElement;

// Get a next siblings
val = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling


// Get a previous siblings
val = lastListItem.previousElementSibling.previousElementSibling
.previousElementSibling.previousElementSibling.

console.log(val);