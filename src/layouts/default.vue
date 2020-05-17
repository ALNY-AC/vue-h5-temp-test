<template>
  <div class="default">
    <nuxt class="view-body" />
    <!-- <van-tabbar route v-model="active" :fixed="false" active-color="#55C7C7">
      <van-tabbar-item class="icon-1" replace to="/" icon="bar-chart-o">统计</van-tabbar-item>
      <van-tabbar-item class="icon-2" replace to="/user/list" icon="user-o">用户列表</van-tabbar-item>
      <van-tabbar-item class="icon-2" replace to="/house/list" icon="wap-home-o">房屋列表</van-tabbar-item>
    </van-tabbar>-->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "root",
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
