<template>
  <div class="o-url-list">
    <el-row :gutter="20">
      <el-col class="item" :span="4" v-for="item in routerList" :key="item.name">
        <nuxt-link :to="item.path">
          <el-card shadow="never">
            <div class="name">{{item.name}}</div>
            <div>{{item.compName}}</div>
            <div class="path">{{item.path}}</div>
          </el-card>
        </nuxt-link>
      </el-col>
    </el-row>

  </div>
</template>
<script src="./OUrlList.js"></script>
<style lang="scss" scoped>
@import "OUrlList.scss";
</style>