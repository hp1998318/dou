import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    // baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 1000,
    // headers: {
    //   "content-type": "application/x-www-form-urlencoded",
    // },
  });

  //为请求实例添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // console.log(config.url);
      // 给请求添加豆瓣 apikey
      config.url = config.url.concat(
        "?apiKey=0df993c66c0c636e29ecbb5344252a4a"
      );
      return Promise.resolve(config);
    },
    (err) => {
      //请求错误 一般http状态码以4开头，常见：401超时，404 not found 多为前端浏览器错误
      return Promise.reject(err);
    }
  );
  instance.interceptors.response.use(
    (res) => {
      // console.log(res);
      return Promise.resolve(res.data);
    },
    (err) => {
      //响应错误,一般http状态码以5开头，500系统错误，502系统重启等，偏向于服务端返回的报错
      return Promise.reject(err);
    }
  );

  return instance(config);
}
