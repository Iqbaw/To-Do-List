document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
