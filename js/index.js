// const onUserCreateHandler = () => {
//   const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
// }

// const userCreateButton = document.querySelector('.user-create-button')
// userCreateButton.addEventListener('click', onUserCreateHandler)
import UserTitle from "./User/UserTitle.js";
import { UserList, RenderUserList } from "./User/UserList.js";
import TodoAppContainer from "./Todo/TodoAppContainer.js";
import CountContainer from "./Count/CountContainer.js";
import { DOMelement } from "./util/util.js";
import { ApiController } from "./api/api.js";

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

const store = {};

new ApiController()
  .sendApi("/api/users")
  .then((res) => RenderUserList((store.user = res)));
