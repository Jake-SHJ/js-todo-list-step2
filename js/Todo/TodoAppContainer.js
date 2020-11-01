import { DOMelement } from "../util/util.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

const TodoAppContainer = () => {
  const todoappContainer = new DOMelement("section").addClass("todoapp")
    .element;

  todoappContainer.append(TodoInput(), TodoList());
  return todoappContainer;
};

export default TodoAppContainer;
