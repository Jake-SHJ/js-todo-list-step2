import UserTitle from "./User/UserTitle.js";
import { UserList } from "./User/UserList.js";
import { RenderUserList } from "./User/RenderUserList.js";

import TodoAppContainer from "./Todo/TodoAppContainer.js";

import CountContainer from "./Count/CountContainer.js";

import { DOMelement } from "./util/util.js";

import { getUserList } from "./api/UserApi.js";

const App = document.getElementById("app");

if (App) {
  App.append(UserTitle(), UserList(), TodoAppContainer(), CountContainer());
} else {
  const App = document.body.appendChild(
    new DOMelement("div").setId("app").element
  );
  App.append(UserTitle(), UserList(), TodoAppContainer(), CountContainer());
}

getUserList.then((res) => {
  RenderUserList(res);
});
