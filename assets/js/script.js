var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    //package data as an object
   var taskDataObj = {
       name: taskNameInput,
       type: taskTypeInput
   };
   //send as argument to createTask funciton
   createTaskEl(taskDataObj);
   }
   //createTask function
 var createTaskEl = function(taskDataObj) {
   //creates list items
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //creates div to hold task info and styling
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
   //add li item to end of list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
