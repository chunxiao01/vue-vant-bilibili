/*
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 11:21:57
 * @LastEditTime: 2021-10-18 15:52:27
 * @LastEditors: chunxiao
 * @Description:
 */
//引用Vue相关库
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//自动设置REM基准值
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
