
// if(something){
//     do something
// }else{
//     do something else
// }

const id = 100;

// Equal to value

if(id == "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

if(id != "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// Equal to value and type

if(id === 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}


if(id !== "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

if(100 <= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// else if
const color = "red";

if(color === "red"){
    console.log("RED");
}else if(color === "blue"){
     console.log("BULE");
}else{
    console.log("I dont know the color")
}

// Logical operotor

const name = "Javid";
const age = 66;

// AND -- && -- check both true 

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
}else if(age >= 13 && age <= 19){
     console.log(`${name} is a teen`)
}else if(age >= 19 && age <= 100){
     console.log(`${name} is a adult`)
}else{
    console.log(`${name} is a dead`)
}

// OR -- || -- check one true
if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
}else{
    console.log(`${name} can run the race`)
}