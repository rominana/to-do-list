/**
 * @jest-environment jsdom
 */
import removeTask from '../remove-task.js';

describe('Remove task function', () => {
  test('Should remove a task from the DOM', () => {
    document.body.innerHTML = '<div> <ul id="task-list"><li></li></ul> </div>';
    const task = document.querySelector('li');
    removeTask(task);
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(0);
  });
});
