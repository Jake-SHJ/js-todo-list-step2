// const onUserCreateHandler = () => {
//   const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
// }

// const userCreateButton = document.querySelector('.user-create-button')
// userCreateButton.addEventListener('click', onUserCreateHandler)
import UserTitle from "./User/UserTitle.js";
import UserList from "./User/UserList.js";
import TodoAppContainer from "./Todo/TodoAppContainer.js";
import CountContainer from "./Count/CountContainer.js";
import { DOMelement } from "./util/util.js";

const App = document.getElementById("app");

if (App) {
  App.append(UserTitle(), UserList(), TodoAppContainer(), CountContainer());
} else {
  const App = document.body.appendChild(
    new DOMelement("div").setId("app").element
  );
  App.append(
    UserTitle("Jake"),
    UserList(),
    TodoAppContainer(),
    CountContainer()
  );
}

console.log(App);
