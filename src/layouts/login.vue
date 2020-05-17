<template>
  <div class="login">
    <nuxt class="nuxt" />
  </div>
</template>

<script>
export default {
  middleware: "root",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
.nuxt {
  display: flex;
  height: 100vh;
}
</style>
