import { DOMelement } from "../util/util.js";

export const UserList = () => {
  const userListWrapper = new DOMelement("div").setId("user-list").element;
  const userListContainer = new DOMelement("section").element;
  userListContainer.appendChild(userListWrapper);
  return userListContainer;
};
