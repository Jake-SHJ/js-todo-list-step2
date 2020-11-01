import { DOMelement } from "../util/util.js";

const UserTitle = (userInfo = "jake") => {
  const userTitle = `<strong>${userInfo}</strong>'s Todo List`;
  const userTitleWrapper = new DOMelement("span").addInnerHTML(userTitle)
    .element;
  const userTitleContainer = new DOMelement("h1").setId("user-title").element;

  userTitleContainer.append(userTitleWrapper);

  return userTitleContainer;
};

export default UserTitle;
