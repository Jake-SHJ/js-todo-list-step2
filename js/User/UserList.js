import { DOMelement } from "../util/util.js";

const UserList = (userListInfo = []) => {
  const userButtons = userListInfo.map((userInfo) => {
    const userButton = new DOMelement("button").addClass("ripple").element;
    userButton.innerHTML = userInfo;
    return userButton;
  });
  const userCreateButton = new DOMelement("button")
    .addClass("ripple")
    .addClass("user-create-button")
    .addInnerHTML("+ 유저 생성").element;
  const userListWrapper = new DOMelement("div").setId("user-list").element;
  const userListContainer = new DOMelement("section").element;

  userListWrapper.append(...userButtons, userCreateButton);
  userListContainer.appendChild(userListWrapper);
  return userListContainer;
};

export default UserList;
