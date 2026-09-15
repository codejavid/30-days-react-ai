

// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");


// Load all event 

function loadEventListerners(){

    console.log("APP Started");

    // Add task event
    form.addEventListener("submit", addTasks);

    // Clear task list
    clearBtn.addEventListener("click", clearTask);

    // Remove task list
    taskList.addEventListener("click", removeTask)


}


function addTasks(e){

    e.preventDefault();

    // validate

    if(taskInput.value === ""){
        alert("Please fill the fields");
    }else{
        
        // Cretae element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Add a innerText
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");
        
        // Add class
        link.className = "delete-item secondary-content";

        // Add a icon
        link.innerHTML = `<i class="fa fa-remove"></i>`

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

        taskInput.value = "";

    }

}


function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
       if(confirm("Are you sure")){
         e.target.parentElement.parentElement.remove();
       }
    }
}


function clearTask(){
    taskList.innerHTML = "";
}


loadEventListerners();