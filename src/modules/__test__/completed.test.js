/**
 * @jest-environment jsdom
 */

import completed from "../completed.js";
import getData from "../get-data.js";

jest.mock("../get-data.js");

test("Edit items on the list", () => {
  global.localStorage.setItem(
    "toDoData",
    '[{"description":"clean the bathroom","completed":false,"index":1}]'
  );
  completed("task1", true);
  const storageData = getData();
  expect(storageData[0].completed).toBe(true);
});
