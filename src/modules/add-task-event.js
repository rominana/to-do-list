import addTask from './add-task.js';

const button = document.getElementById('add-task');

const addTaskEvent = () => {
  button.addEventListener('click', addTask);
};

export default addTaskEvent;
