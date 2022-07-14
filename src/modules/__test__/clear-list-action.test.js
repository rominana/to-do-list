/**
 * @jest-environment jsdom
 */

import clearListAction from '../clear-list-action.js';

describe('Clear list', () => {
  test('Clear items from the list', () => {
    document.body.innerHTML = '<div> <ul id="task-list"><li class="task"><div class="text"></div><input type="text" class="edit"><input type="checkbox" class="check" checked="checked"><button class="remove"></button></li><li class="task"><div class="text"></div><input type="text" class="edit"><input type="checkbox" class="check" checked="checked"><button class="remove"></button></li><li class="task"><div class="text"></div><input type="text" class="edit"><input type="checkbox" class="check"><button class="remove"></button></li></ul><button id="clear" type="button">Clear all completed</button> </div>';
    clearListAction();
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);
  });
});