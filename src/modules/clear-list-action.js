import removeTask from './remove-task.js';

const clearListAction = () => {
  const tasks = document.querySelectorAll('.task');
  const tasksToBeRemoved = [...tasks].filter((task) => {
    const checkbox = task.querySelector('.check');
    return checkbox.checked;
  });
  tasksToBeRemoved.forEach((task) => {
    const removeButton = task.querySelector('.remove');
    removeTask(removeButton);
  });
};

export default clearListAction;
