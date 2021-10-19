<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 20:23:16
 * @LastEditTime: 2021-10-19 22:08:41
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div class="category">
    <!-- 顶部导航栏 -->
    <nav-bar-top />
    <h2>分区</h2>
  </div>
</template>

<script>
import NavBarTop from "@/components/content/NavBarTop.vue";
export default {
  name: "Category",
  components: {
    NavBarTop
  }
};
</script>

<style scoped></style>
