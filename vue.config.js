// 假设要请求的接口是：http://40.00.100.100:3002/api/user/add
module.exports = {
  devServer: {
    host: "localhost", // 本地主机
    port: 8080, // 端口号的配置
    open: false, // 自动打开浏览器
    proxy: {
      "/api": {
        //  拦截以 /api 开头的接口
        target: "https://api.wmdb.tv/api/v1", //设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true, //这里true表示实现跨域
        secure: true, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "/", //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/api/user/add'，直接写‘/api/user/add’即可
        },
      },

      // 假如又有一个接口是：http://40.00.100.100:3002/get/list/add
      // 那就再配置一个 get的，如下：
      "/get": {
        //  拦截以 /get 开头的接口
        target: "http://40.00.100.100:3002", //设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true, //这里true表示实现跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "/", //这里理解成用‘/api’代替target里面的地址，
        },
      },
      // 调用的时候直接   /get/list/add  就可以了
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/apis",
        views: "@/views",
      },
    },
  },
};

// // 注意：修改了配置文件后一定要重启才会生效;
