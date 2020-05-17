<template>
  <div id="list">
    <div class="head">
      <div class="he-1">家有益房</div>
      <div class="he-2">管理系统</div>
    </div>
    <div class="panel">
      <div class="data-panel" v-if="data">
        <div class="data-card">
          <div class="data-icon" style="background-color: rgba(255, 104, 84, 0.3);color:#FF6954">
            <van-icon name="user-o" />
          </div>
          <div class="data-label">用户</div>
          <div class="data-value">{{data.user_total}}</div>
        </div>
        <div class="data-card">
          <div class="data-icon" style="background-color: rgba(246, 210, 49, 0.3);color:#F6D231">
            <van-icon name="wap-home-o" />
          </div>
          <div class="data-label">房源</div>
          <div class="data-value">{{data.house_total}}</div>
        </div>
        <div class="data-card">
          <div class="data-icon" style="background-color: rgba(116, 120, 243, 0.3);color:#7478F3">
            <van-icon name="balance-o" />
          </div>
          <div class="data-label">收入</div>
          <div class="data-value">{{data.vip_total}} ¥</div>
        </div>
      </div>
      <van-divider />
      <!-- 7、10、15、30 -->
      <van-row gutter="10">
        <van-col span="6">
          <van-button
            plain
            :color="query.day==7?'#FF6954':'#bcbcbc'"
            block
            @click="query.day=7;update()"
          >7天</van-button>
        </van-col>
        <van-col span="6">
          <van-button
            plain
            :color="query.day==10?'#FF6954':'#bcbcbc'"
            block
            @click="query.day=10;update()"
          >10天</van-button>
        </van-col>
        <van-col span="6">
          <van-button
            plain
            :color="query.day==15?'#FF6954':'#bcbcbc'"
            block
            @click="query.day=15;update()"
          >15天</van-button>
        </van-col>
        <van-col span="6">
          <van-button
            plain
            :color="query.day==30?'#FF6954':'#bcbcbc'"
            block
            @click="query.day=30;update()"
          >30天</van-button>
        </van-col>
      </van-row>
      <h4>
        每日注册用户(30天内)
        <van-loading style="display: inline-block;" v-if="loading" />
      </h4>
      <div class="chart" id="userData"></div>
      <van-divider />
      <h4>
        每日任务发布量(30天内)
        <van-loading style="display: inline-block;" v-if="loading" />
      </h4>
      <div class="chart" id="taskData"></div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>