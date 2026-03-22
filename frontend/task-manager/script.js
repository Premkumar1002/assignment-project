const API = "http://localhost:5000/tasks";

async function addTask() {
  const input = document.getElementById("taskInput");

  await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ task_name: input.value })
  });

  input.value = "";
  loadTasks();
}

async function loadTasks() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${t.task_name} - ${t.status}
      <button onclick="updateTask(${t.id})">Change</button>
    `;
    list.appendChild(li);
  });
}

async function updateTask(id) {
  await fetch(`${API}/${id}`, { method: "PUT" });
  loadTasks();
}

loadTasks();