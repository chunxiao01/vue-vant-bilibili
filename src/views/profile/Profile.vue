<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 20:24:13
 * @LastEditTime: 2021-10-19 22:09:39
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div class="profile">
    <!-- 顶部导航栏 -->
    <nav-bar-top />
    <h2>我的</h2>
  </div>
</template>

<script>
import NavBarTop from "@/components/content/NavBarTop.vue";
export default {
  name: "Profile",
  components: {
    NavBarTop
  }
};
</script>

<style scoped></style>
