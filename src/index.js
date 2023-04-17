document.addEventListener("DOMContentLoaded", () => {
  //Process form submission
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e){
    //Prevent form submission default action
    e.preventDefault();
    //Pass value of form text field to createToDo function
    createToDo(e.target.new_task_description.value);
    form.reset();
  });

  //This function adds a list item containing the submitted task
  function createToDo(task) {
    //Create li and button elements
    let li = document.createElement("li");
    let btn = document.createElement("button");
    //Handle a click on the delete button
    btn.addEventListener("click", handleDelete);
    //Set button and li content
    btn.textContent = "x";
    li.textContent = task;
    //Append button to li and li to ul by ID
    li.appendChild(btn);
    document.getElementById('tasks').appendChild(li);
  }

  //This function handles a click on the delete button
  function handleDelete(e){
    e.target.parentNode.remove();
  }
});

