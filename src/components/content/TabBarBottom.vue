<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-19 21:00:14
 * @LastEditTime: 2021-10-19 21:50:40
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div class="tabbar-bottom-container">
    <van-tabbar
      v-model="currentActiveIndex"
      active-color="#fb7299"
      inactive-color="#666"
    >
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template v-slot:icon="props">
          <img :src="props.active ? icon.active_0 : icon.inactive_0" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <span>分区</span>
        <template v-slot:icon="props">
          <img :src="props.active ? icon.active_1 : icon.inactive_1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile">
        <span>我的</span>
        <template v-slot:icon="props">
          <img :src="props.active ? icon.active_2 : icon.inactive_2" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "NarBarBottom",
  data() {
    return {
      currentActiveIndex: 0,
      icon: {
        active_0: require("@/assets/img/tabbar/0_0.svg"),
        inactive_0: require("@/assets/img/tabbar/0_1.svg"),
        active_1: require("@/assets/img/tabbar/1_0.svg"),
        inactive_1: require("@/assets/img/tabbar/1_1.svg"),
        active_2: require("@/assets/img/tabbar/2_0.svg"),
        inactive_2: require("@/assets/img/tabbar/2_1.svg")
      }
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>

<style lang="less" scoped>
.tabbar-container {
  .van-tabbar-item__icon img {
    width: 50px;
    height: 50px;
  }
  .van-tabbar-item__text span {
    font-size: 30px;
  }
}
</style>
