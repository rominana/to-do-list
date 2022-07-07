import Task from './task.js';
import createLi from './create-li.js';
import getData from './get-data.js';

// selectors
const input = document.getElementById('new-task');
const button = document.getElementById('add-task');
const alert = document.getElementById('alert');

const addTaskEvent = () => {
  button.addEventListener('click', () => {
    const toDoTasks = getData();
    if (input.value) {
      const task = new Task(input.value, toDoTasks.length + 1);
      createLi(task);
      toDoTasks.push(task);
      // set data in the local storage
      localStorage.setItem('toDoData', JSON.stringify(toDoTasks));
      input.value = '';
    } else {
      alert.innerHTML = 'Empty field!';
      alert.style.display = 'block';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 1000);
    }
  });
};

export default addTaskEvent;