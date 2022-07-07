import updateIndex from './update-index.js';

const removeTask = (target) => {
  target.parentElement.remove();
  updateIndex();
};

export default removeTask;