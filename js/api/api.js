export class ApiController {
  constructor() {
    this.baseUrl = "https://js-todo-list-9ca3a.df.r.appspot.com";
    this.headers = new Headers({ "Content-Type": "application/json" });
  }

  async sendApi(url, method = "get", requestBody) {
    const response = await fetch(this.baseUrl + url, { method, requestBody });
    const result = await response.json();
    return result;
  }
}
