/**
 * @jest-environment jsdom
 */
import getData from "../get-data.js";
jest.mock("../get-data.js");

import addTask from "../add-task.js";

test("testing localstorage", () => {
  const data = [{ description: "clean my room", completed: false, index: 1 }];
  expect(getData()).toEqual(data);
});

test("Add task when input value is defined", () => {
  document.body.innerHTML =
    "<div>" +
    '  <input type="text" name="new-task" id="new-task" placeholder="Add task to your list" value="text">' +
    "</div>" +
    '  <ul id="task-list"></ul>';
  addTask();

  const list = document.querySelectorAll("#task-list li");
  expect(list).toHaveLength(1);

  const input = document.querySelector("input");
  expect(input).toHaveProperty("value", "");
});

test("Add task when input value is defined", () => {
  document.body.innerHTML =
    '<div id="alert"></div>' +
    "<div>" +
    '  <input type="text" name="new-task" id="new-task" placeholder="Add task to your list" value="">' +
    "</div>" +
    '  <ul id="task-list"></ul>';
  addTask();

  // const list = document.querySelectorAll("#task-list li");
  // expect(list).toHaveLength(1);

  const alert = document.querySelector("#alert");
  expect(alert).toHaveProperty("innerHTML", "Empty field!");
});
