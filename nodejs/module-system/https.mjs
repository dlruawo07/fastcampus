// const request = require("./request");
// const response = require("./response");

import { send } from "./request.mjs";
import { read } from "./response.mjs";

function makeRequest(url, data) {
  send(url);
  return read();
}

const responseData = makeRequest("https://naver.com", "any data");

console.log(responseData);
