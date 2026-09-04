

const name = "javid";
const job = "web dev";
const city = "chennai";

let html;

// Without template strings (es5)
// html = "My name is" + " " + name + " " + "and my job is"
// + " " + job + " " + "im from" + " " + city;

// console.log(html);


// With template strings
html = `My name is ${name} my job is ${job} and im from ${city}`

console.log(html);