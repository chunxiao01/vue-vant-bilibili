<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 20:22:30
 * @LastEditTime: 2021-10-19 22:03:43
 * @LastEditors: chunxiao
 * @Description: 
-->
<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <nav-bar-top />
    <!-- 顶部搜索 -->
    <div class="search-container">
      <van-search :show-action="false" shape="round" @focus="searchTrigger" />
    </div>
    <!-- 标签栏 -->
    <div class="tab-container">
      <van-tabs v-model="currentActiveIndex">
        <van-tab title="热门">热门</van-tab>
        <van-tab title="追番">追番</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBarTop from "@/components/content/NavBarTop.vue";
import { Search } from "vant";
import { Tab, Tabs } from "vant";
export default {
  name: "Home",
  data() {
    return {
      currentActiveIndex: 0
    };
  },
  components: {
    NavBarTop,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  methods: {
    searchTrigger() {
      this.$router.replace("/homesearch");
    }
  }
};
</script>

<style lang="less">
.tab-container {
  .van-tabs__wrap {
    border-bottom: 1px solid #e3e3e3;
  }
}
</style>
