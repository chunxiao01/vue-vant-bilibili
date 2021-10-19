<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-19 20:52:45
 * @LastEditTime: 2021-10-19 22:02:45
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div class="search-container">
    <nav-bar-top :isShowLeftArrow="true" @leftarrowclick="onLeftArrowClick" />
    <div class="search-container">
      <van-search show-action autofocus shape="round" @cancel="onCancel" />
    </div>
  </div>
</template>

<script>
import NavBarTop from "@/components/content/NavBarTop.vue";
import { Search } from "vant";
export default {
  name: "HomeSearch",
  components: {
    NavBarTop,
    [Search.name]: Search
  },
  methods: {
    onLeftArrowClick() {
      this.$router.replace("/home");
    },
    onCancel() {
      this.$router.replace("/home");
    }
  }
};
</script>

<style lang="less" scoped></style>
