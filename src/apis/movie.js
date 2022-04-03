import { request } from "./axios";
export function in_theaters() {
  return request({
    url: "/top?type=Douban&skip=0&limit=50&lang=Cn",
    method: "get",
  });
}
