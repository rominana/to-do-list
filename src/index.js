import './style.css';
import createLi from './modules/create-li.js';
import addTaskEvent from './modules/add-task.js';
import getData from './modules/get-data.js';
import clearCompleted from './modules/clear-list.js';

getData().forEach((task) => createLi(task));
clearCompleted();
addTaskEvent();
