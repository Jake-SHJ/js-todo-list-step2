import { DOMelement } from "../util/util.js";
import filter from "./filter.js";

const CountContainer = (count = 0) => {
  const countText = `총 <strong>${count}</strong> 개`;
  const todoCount = new DOMelement("span").addClass("todo-count").element;
  const clearButton = new DOMelement("button")
    .addClass("clear-completed")
    .addInnerHTML("모두 삭제").element;
  const countContainer = new DOMelement("div").addClass("count-container")
    .element;

  todoCount.innerHTML = countText;
  countContainer.append(todoCount, filter(), clearButton);
  return countContainer;
};

export default CountContainer;
