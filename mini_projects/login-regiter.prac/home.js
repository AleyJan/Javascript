const usernameElement = document.getElementById("username");
const logoutBtn = document.getElementById("logout-btn");
const taskForm = document.getElementById("task-form");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
usernameElement.innerText = currentUser.fullName;

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
});


function createLi(item, index) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "me-2";

  // already completed
  if (item.isCompleted) {
    checkbox.checked = true;
    li.style.textDecoration = "line-through";
  }

 
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      alert("Task completed!");

      
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos[index].isCompleted = true;
      localStorage.setItem("todos", JSON.stringify(todos));

      
      li.style.textDecoration = "line-through";
    }
  });

  
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(item.task));
  return li;
}

// Show all tasks
function showTasks() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const filteredTodos = todos.filter(
    (item) => item.createdBy.email === currentUser.email
  );

  const ul = document.createElement("ul");
  ul.className = "list-group";
  ul.id = "todo-list";

  filteredTodos.forEach((item, index) => {
    const li = createLi(item, index);
    ul.appendChild(li);
  });

  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = ""; 
  listContainer.appendChild(ul);
}

// Submit form to add new task
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = event.target.task.value;

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  const todo = {
    task: task,
    isCompleted: false,
    createdBy: {
      fullName: currentUser.fullName,
      email: currentUser.email,
    },
  };

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  alert("Task created successfully!");
  event.target.reset();

  showTasks(); // Refresh list
});

// Initial load
showTasks();
