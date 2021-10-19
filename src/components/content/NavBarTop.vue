<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-19 20:54:17
 * @LastEditTime: 2021-10-19 22:00:16
 * @LastEditors: chunxiao
 * @Description: 顶部导航栏
-->
<template>
  <div class="navbar-container">
    <van-nav-bar
      :left-arrow="isShowLeftArrow"
      :border="false"
      :left-text="leftText"
      @click-left="backclick"
    >
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: "NavBarTop",
  props: {
    isShowLeftArrow: {
      type: Boolean,
      default: false
    },
    leftText: {
      type: String,
      default: "哔哩哔哩"
    }
  },
  data() {
    return {
      value: ""
    };
  },
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    backclick() {
      this.$emit("leftarrowclick");
    }
  }
};
</script>

<style lang="less">
.van-nav-bar {
  .van-nav-bar__left {
    padding-left: 12px;
  }
  .van-icon {
    color: #000;
    font-size: 30px;
    margin-right: 24px;
  }
  .van-nav-bar__text {
    color: #000;
    font-size: 30px;
  }
}
</style>
