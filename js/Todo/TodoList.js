import { DOMelement } from "../util/util.js";
import TodoListItem from "./TodoListItem.js";
import TodoSkeletonItem from "./TodoSkeletonItem.js";

const TodoList = () => {
  const todoListWrapper = new DOMelement("ul").addClass("todo-list").element;
  const todoListContainer = new DOMelement("section").addClass("main").element;

  todoListWrapper.append(TodoListItem(), TodoSkeletonItem());
  todoListContainer.appendChild(todoListWrapper);
  return todoListContainer;
};

export default TodoList;
