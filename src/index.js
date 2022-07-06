import './style.css';
import createLi from './modules/create-li.js';
import addTaskEvent from './modules/add-task.js';
import getData from './modules/get-data.js';

getData().forEach((task) => createLi(task));

addTaskEvent();