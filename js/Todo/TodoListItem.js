import { DOMelement } from "../util/util.js";

const mapPriorityValueToPriorityText = {
  0: "순위",
  1: "1순위",
  2: "2순위",
};

const TodoListItem = () => {
  const todoEditInput = (value) =>
    new DOMelement("input").addClass("edit").addAttribute("value", value)
      .element;
  const todoDestroyButton = new DOMelement("button").addClass("destroy")
    .element;
  const todoPriorityChipOption = (value) => {
    return new DOMelement("option")
      .addAttribute("value", value)
      .addInnerHTML(mapPriorityValueToPriorityText[value]).element;
  };
  const todoPriorityChip = new DOMelement("select")
    .addClass("chip")
    .addClass("select").element;
  const todoItem = new DOMelement("label").addClass("label").element;
  const todoItemToggle = new DOMelement("input")
    .addClass("toggle")
    .addAttribute("type", "checkbox").element;
  const todoItemWrapper = new DOMelement("div").addClass("view").element;
  const todoItemContainer = new DOMelement("li").element;

  todoPriorityChip.append(
    todoPriorityChipOption("0"),
    todoPriorityChipOption("1"),
    todoPriorityChipOption("2")
  );
  todoItem.append(todoPriorityChip);
  todoItemWrapper.append(todoItemToggle, todoItem, todoDestroyButton);
  todoItemContainer.append(todoItemWrapper, todoEditInput(""));

  return todoItemContainer;
};

export default TodoListItem;
