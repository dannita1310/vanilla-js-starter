//GET
async function getData() {
  const response = await fetch("http://localhost:3000/api/task");
  const data = await response.json();
  console.log(data);
  return data;
}
export { getData };

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

export { post };

//Delete
function deletedata(texto) {
  fetch("http://localhost:3000/api/task/<task_id>", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: texto }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

//PUT
// async function upload(formData) {
/*try {
    const response = await fetch("http://localhost:3000/api/task/<task_id>", {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

upload(formData);*/
