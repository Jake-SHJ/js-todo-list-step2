import { ApiController } from "./api.js";

export const getUserList = new ApiController().sendApi("/api/users");
export const postUser = (userName) =>
  new ApiController().sendApi("/api/users", "POST", { name: userName });
