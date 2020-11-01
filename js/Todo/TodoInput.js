import { DOMelement } from "../util/util.js";

const TodoInput = () => {
  const todoInput = new DOMelement("input")
    .addClass("new-todo")
    .addAttribute("placeholder", "할 일을 입력해주세요.")
    .addAttribute("autofocus").element;
  const todoInputContainer = new DOMelement("section").addClass(
    "input-container"
  ).element;

  todoInputContainer.appendChild(todoInput);

  return todoInputContainer;
};

export default TodoInput;
