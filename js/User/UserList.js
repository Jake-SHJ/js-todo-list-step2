import { DOMelement } from "../util/util.js";

export const UserList = () => {
  const userListWrapper = new DOMelement("div").setId("user-list").element;
  const userListContainer = new DOMelement("section").element;
  userListContainer.appendChild(userListWrapper);
  return userListContainer;
};

export const RenderUserList = (userListInfo = []) => {
  const userList = document.getElementById("user-list");
  while (userList.firstChild) {
    userList.removeChild(userList.firstChild);
  }
  const userButtons = userListInfo.map((userInfo) => {
    const userButton = new DOMelement("button").addClass("ripple").element;
    userButton.innerHTML = userInfo.name;
    return userButton;
  });
  const userCreateButton = new DOMelement("button")
    .addClass("ripple")
    .addClass("user-create-button")
    .addInnerHTML("+ 유저 생성").element;

  userList.append(...userButtons, userCreateButton);
};
