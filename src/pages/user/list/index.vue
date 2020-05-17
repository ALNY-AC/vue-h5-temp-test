<template>
  <div id="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update">
      <div class="user-card" v-for="item in list" :key="item.id">
        <div class="user-head">
          <img :src="$getUrl(item.head_img)" alt />
        </div>
        <div class="user-info">
          <div class="user-name">{{item.name}}</div>
          <div class="add-time">注册时间:{{item.user_add_time}}</div>
        </div>
        <div class="user-data">房源数：{{item.house_count}}</div>
      </div>
    </van-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>