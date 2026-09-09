

// document.getElementsByClassName();


// HTML COLLECTION

const items = document.getElementsByClassName("collection-item");

console.log(items)
// console.log(items[0])

// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue"
// }

// console.log(Array.isArray(items));

// const x = [1,2,3];

// console.log(x);

const listItems = document.querySelectorAll(".collection-item"); // Nodelist

// console.log(listItems);

listItems.forEach(function(li, index){
    li.style.color = "blue";
})