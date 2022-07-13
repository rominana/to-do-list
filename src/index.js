import './style.css';
import createLi from './modules/create-li.js';
import addTaskEvent from './modules/add-task-event.js';
import getData from './modules/get-data.js';
import clearList from './modules/clear-list.js';

getData().forEach((task) => createLi(task));
clearList();
addTaskEvent();
