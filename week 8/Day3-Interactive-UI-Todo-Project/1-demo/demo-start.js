// =============================================================
// Day 3 Demo: Build a To-Do List with vanilla JavaScript
// Pattern: STATE  →  RENDER  →  EVENTS update state  →  RENDER again
// Live-code in this order. Follow DEMO-GUIDE.md. Reference: demo-finished.js
// =============================================================
function addnum[] 
console,[23+12];

{
addnum[];   11  23

funtion  add(a. b) 
console. log(a  +  b) {

}

add [5,  7]; 11  12
add[10. 8] ; 11 18

funtion  say Hello []]
console . log  [; Hello;] ;
]
           
// STEP 1: Select elements
const formElem .getElementById("todo-form");
const Elem = document.getElementById("todo-input");
const ulElem = document.getElementById("todo-list");
const clearcompleteBtn = document.querySelector("#clear-completed");

// STEP 2: State. One array of task objects: { id, text, completed }
function loadtodoApp() {
    const storeTodoApp = JSON.parse(localStorage.getitem("tasks")) || [];
    return storetodos;
}

function saveTodosTolocalstorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //function to render Todo App
}

let todositems = loadTodoApp(); // load from storage or start with an empty array


// STEP 3: render(): clear the list, build one <li> per task, append
function createTodoTask(Todo) {
const liTasktElem = document.createElement("li"); // create a new <li> element
liTextElem.className = "todo-text"; // set class name to "todo-item"

// creating the text content for the li
const liTextElem = document.createElement("span"); //create a span element for the task text
liTextElem.className = "todo-text"; //set class name to "todo-text"
liTextElem.textContent = todo-text; // set li text  to task text

// creating the delete button for the li
const deleteBtnElem = document.createElement("button"); // create a delete button
deleteBtnElem.className = "delete";
deleteBtnElem.type = "submit";
deleteBtnElem.textContent = "x";

// create a checkbox for the li (todo item) to toggle the completed state of the task
const checkboxElem = document.createElement("input"); // create a check


//appending
liTasktElem.append(liTextElem); //appending the text to the li
ulElem.appendchild(liTasktElem); //appending the li to the ul

return liTasktElem;
}

function renderTodoapp() {
    ulElem.textcontent = "";

    //iterating over all the stored todo items inside the todoitems Array
    todositems.foreach((todo) => {

    })
}


// STEP 4: Add a task (form "submit" + validation)
// create the event listener (function) for the form submission
function handleformsubmit(event) {
    event.preventDefault(); //prvent the default form submission behaviour and refreshing the page
//grab the value from the input box
const textinput = todoInputElem.Value.trim();
if (textinput ====""){
    //throw an error notification
    alert("please type a task first");
    return;
}

//create a unique todo/task list object
const newTaskItem = {
    id: Date.now(),
    text: textInput,
    completed: false
}
     

todositems.push(newTaskItem); // add the 
// STEP 5: Toggle + delete with ONE listener on the list (delegation)


// STEP 6: Filters (All / Active / Completed)


// STEP 7: Footer: items left + clear completed


// STEP 8: Save to localStorage and load on start

