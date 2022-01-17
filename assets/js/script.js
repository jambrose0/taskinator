var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.dir(taskTypeInput);
  //create list item
   var listItemEl = document.createElement("li");
     listItemEl.className = "task-item";
     var taskInfoEl = document.createElement("div");
     taskInfoEl.className = "task-info";
     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
     listItemEl.appendChild(taskInfoEl);
   listItemEl.textContent = taskNameInput;
   tasksToDoEl.appendChild(listItemEl);

   
        }
// var createTaskEl = function(taskDataObj) {
//     //taskDataObj
//     {
//         name: "Task's name",
//         type: "Task's type"
//     }
// }

formEl.addEventListener("submit", createTaskHandler);


// 
// 
// create div  to hold task info and add to list item
// 
// 
//add html content to div
// 
// 
//add entire list item to list      