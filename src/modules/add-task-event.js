const button = document.getElementById("add-task");
import addTask from "./add-task.js";

const addTaskEvent = () => {
  button.addEventListener("click", addTask);
};

export default addTaskEvent;
