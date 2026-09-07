

// Two phase

// 1 - creation
// 2 - excution


// Function decalartion || function statement

function greet(firstName = "john", lastName="doe"){


    // Default parameter
    // if(typeof firstName === "undefined"){firstName="john"}
    // if(typeof lastName === "undefined"){lastName="doe"}

    return `Hello ${firstName} ${lastName}`

}

// console.log(greet("Jagan", "Javid"));
// console.log(greet("Arun", "Kumar"));
// console.log(greet());


// Function expression

const add = function(x){
    return x + 5;
}

console.log(add(10))


