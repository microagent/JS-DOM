/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

let addTask = document.getElementById("add-button");
let toDoList = document.getElementById("todo-list");
let toDoItem = document.getElementById("description");

addTask.addEventListener("click", function() {
  console.log("clicked!");
  newLi = document.createElement("li");
  newLi.innerHTML = `<input type="button" class="delete" value="delete"> ${
    toDoItem.value
  }`;
  toDoList.appendChild(newLi);
  toDoItem.value = "";
});

toDoList.addEventListener("click", function(e) {
  console.log(e);
  e.target.style.textDecoration = "line-through";
});

// toDoList.addEventListener("click", function(e) {
//   console.log(e);
//   e.target.style.textDecoration = "line-through";
// });
