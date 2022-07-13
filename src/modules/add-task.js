import Task from './task.js';
import createLi from './create-li.js';
import getData from './get-data.js';

// selectors

const addTask = () => {
  const input = document.getElementById('new-task');
  const alert = document.getElementById('alert');
  const toDoTasks = getData();
  if (input.value) {
    const task = new Task(input.value, toDoTasks.length + 1);
    createLi(task);
    toDoTasks.push(task);
    localStorage.setItem('toDoData', JSON.stringify(toDoTasks));
    input.value = '';
  } else {
    alert.innerHTML = 'Empty field!';
    alert.style.display = 'block';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 1000);
  }
};

export default addTask;
