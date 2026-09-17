document.getElementById("btn-1").addEventListener("click", getText);
document.getElementById("btn-2").addEventListener("click", getJson);
document.getElementById("btn-3").addEventListener("click", getApi);


function getText() {
  fetch("text.txt")
    .then((respone) => respone.text())
    .then((data) => document.querySelector("#output").innerText = data)
    .catch((err) => console.log(err));
}

function getJson(){
    fetch("posts.json")
    .then((respone) => respone.json())
    .then((data) => {
        let output = "";

        data.forEach((post) => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output
    })
    .catch((err) => console.log(err));
}

function getApi(){
    fetch("https://6aabff4eea0e22daa6dcd06d.mockapi.io/api/v1/users")
    .then((respone) => respone.json())
    .then((data) => {
        let output = "";

        data.forEach((post) => {
            output += `<li>${post.name}</li>`
        })

        document.querySelector("#output").innerHTML = output
    })
    .catch((err) => console.log(err));



}

//  GET, POST, PUT, DELETE

// 200 - success
// 404 - not found
