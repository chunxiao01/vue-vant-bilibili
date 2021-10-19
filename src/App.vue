<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 11:21:57
 * @LastEditTime: 2021-10-19 22:07:15
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div id="app">
    <nar-bar-bottom />
    <router-view />
  </div>
</template>
<script>
import NarBarBottom from "@/components/content/TabBarBottom.vue";
export default {
  name: "App",
  components: {
    NarBarBottom
  }
};
</script>
<style></style>
