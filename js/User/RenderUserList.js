import { DOMelement } from "../util/util.js";
import { getUserList, postUser } from "../api/UserApi.js";

const onUserCreateHandler = () => {
  const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
  if (userName === null) return;

  if (userName.length < 2)
    return alert("최소 2글자 이상이 필요합니다. 다시 시도해주세요.");

  postUser(userName)
    .then((res) => console.log(res))
    .then(getUserList.then((res) => RenderUserList(res)))
    .catch((err) => console.err(err));
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

  userCreateButton.addEventListener("click", () => {
    onUserCreateHandler();
  });

  userList.append(...userButtons, userCreateButton);
};
