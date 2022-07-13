/**
 * @jest-environment jsdom
 */
import createLi from "../create-li.js";

describe("Create LI function", () => {
  test("Should add a li element to the DOM", () => {
    const task = {
      description: "clean my room",
      completed: false,
      index: 1,
    };
    document.body.innerHTML = "<div>" + '  <ul id="task-list"></ul>' + "</div>";
    createLi(task);
    const list = document.querySelectorAll("#task-list li");
    expect(list).toHaveLength(1);
  });
});
