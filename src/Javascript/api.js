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
async function upload(formData) {
  try {
    const response = await fetch("http://localhost:3000/api/task/" + task_id, {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export { getData, post, deleteData };
