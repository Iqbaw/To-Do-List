document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("new-task");
  const timeInput = document.getElementById("task-time");
  const taskText = taskInput.value.trim();
  const taskTime = timeInput.value;

  if (taskText === "" || taskTime === "") return;

  const taskList = document.getElementById("task-list");

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <div class="task-details">
      <span>${taskText}</span>
      <span class="task-time">Target Time: ${taskTime}</span>
    </div>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
  timeInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
