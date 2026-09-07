

// For loop

// Loop can excute a block of a code number of lines

// delcare, condition, inc

// for(let i = 0; i <= 10; i++){
   
//     if(i === 4){
//         console.log(`${i} is a good number`);
//         continue;
        
//     }

//     if(i === 7){
//         console.log(`${i} hits stop the loop`);
//         break;
//     }

//     console.log(i)

// }


const users = ["jagan", "javid", "akash", "arun"];

// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }


users.forEach(function(user, index, arr){

    console.log(`${user} - ${index}`)
    console.log(arr)

})