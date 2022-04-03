import { request } from "./axios";
export function user() {
  return request({
    // url: "/user/1000001",
    url: "/movie/celebrity/1054395",
    method: "get",
  });
}
