//GET
async function getData() {
  const response = await fetch("http://localhost:3000/api/task");
  const data = await response.json();
  return data;
}

//POST
async function post(task) {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postedTask = await response.json();
  return postedTask; // {task: "Algo que hacer", id:"fsdf-fads-sdff"}
}

//DELETE
async function deleteData(task_id) {
  const response = await fetch("http://localhost:3000/api/task/" + task_id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const deleteTask = await response.json();
  return deleteTask;
}

// // PUT

async function updateData(task_id, task) {
  const response = await fetch("http://localhost:3000/api/task/" + task_id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postedTask = await response.json();
  return postedTask; 
}

export { getData, post, deleteData, updateData };
