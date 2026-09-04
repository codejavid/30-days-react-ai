
const numbers = [5,3,23,54,65,34,87,98,45,11];

// console.log(numbers);

let val;


// Get the array length
val = numbers.length;

// Check if it is a array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[1];

// Change into array index value
val = numbers[3] = 100;


// Mutate array

// Add on the end
val = numbers.push(1000);

// Add on the front
val = numbers.unshift(2000);

// Take off the end
numbers.pop();
numbers.pop();

// Take off the front
numbers.shift();
numbers.shift();

// console.log(val);
// console.log(numbers);

const fruits = ["Apple", "Orange", "Kiwi", "Lemon"];

// Splice => ADD || REMOVE

// Splice to remove
// fruits.splice(1, 2);

// Splice to add
fruits.splice(2, 1 ,"Goa");

console.log(fruits);