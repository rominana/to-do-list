import editTask from './edit-task.js';
import removeTask from './remove-task.js';

// Selectors
const taskList = document.getElementById('task-list');

const createLi = (task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const div = document.createElement('div');
  const button = document.createElement('button');
  const removeButton = document.createElement('button');
  const textInput = document.createElement('input');

  // Set List element id and classes
  li.setAttribute('id', `task${task.index}`);
  li.classList.add('task');

  // Set checkbox attributes
  checkbox.checked = task.completed;
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', `check${task.index}`);
  checkbox.setAttribute('id', `check${task.index}`);

  // Set text input attributes
  textInput.classList.add('edit');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('name', `text${task.index}`);
  textInput.setAttribute('id', `text${task.index}`);
  textInput.value = task.description;

  // Set div classes and content
  div.classList.add('text');
  div.innerHTML = task.description;
  if (checkbox.checked) {
    div.classList.add('done');
  }

  // BUTTONS
  // Set remove button class and content
  removeButton.classList.add('remove');
  removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  // Append all elements to li in html in order
  li.appendChild(checkbox);
  li.appendChild(div);
  li.appendChild(textInput);
  li.appendChild(button);
  li.appendChild(removeButton);

  taskList.appendChild(li);

  // Event listeners
  checkbox.addEventListener('change', () => {
    div.classList.toggle('done');
  });

  div.addEventListener('click', () => {
    div.style.display = 'none';
    textInput.style.display = 'inherit';
  });

  textInput.addEventListener('change', () => {
    div.innerHTML = textInput.value;
    editTask(task.index, textInput.value, checkbox.checked);
    div.style.display = 'inherit';
    textInput.style.display = 'none';
  });

  textInput.addEventListener('focusout', () => {
    div.style.display = 'inherit';
    textInput.style.display = 'none';
  });

  removeButton.addEventListener('click', () => {
    removeTask(task.index);
  });
};

export default createLi;
