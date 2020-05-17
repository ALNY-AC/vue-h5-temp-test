<template>
  <div id="login">
    <div class="login-box">
      <div class="title">家有益房管理系统</div>
    </div>
    <div class="form-box">
      <van-field label="账户" v-model="form.phone" placeholder="账户"></van-field>
      <van-field label="密码" v-model="form.user_pwd" placeholder="密码" type="password"></van-field>
      <van-button color="#61cad7" block class="submit" @click="submit">登录</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>