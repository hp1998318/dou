import { request } from "./axios";
export function user() {
  return request({
    url: "/user/1000001",
    method: "get",
  });
}
