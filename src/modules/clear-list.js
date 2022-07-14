import clearListAction from "./clear-list-action.js";

const clearList = () => {
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", () => {
    clearListAction();
  });
};

export default clearList;
