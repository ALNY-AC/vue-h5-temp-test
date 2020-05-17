<template>
  <div id="list">
    <van-dropdown-menu>
      <van-dropdown-item @change="updateInit" v-model="query.user_type" :options="user_type" />
    </van-dropdown-menu>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update">
      <div class="list">
        <div class="card" v-for="item in list" :key="item.id">
          <div class="user-card">
            <div class="user-head">
              <img v-if="item.user_type==2" :src="$getUrl(item.head_img)" />
              <img v-else src="@/static/images/admin.jpg" />
            </div>
            <div class="user-info">
              <div class="user-name">{{item.user_type==2?item.name:'管理员'}}</div>
              <div class="add-time">发布时间:{{item.add_time}}</div>
              <div class="house-body">
                <div class="house-info">
                  <div class="house-name">{{item.title}}</div>
                  <div class="house-pirce">
                    <div class="house-label">价格：</div>
                    {{item.price}}
                  </div>
                  <div>
                    <div class="house-label">布局：</div>
                    {{item.bedroom}}室{{item.room}}厅{{item.wc}}卫
                  </div>
                  <div>
                    <div class="house-label">朝向：</div>
                    {{item.towards}}
                  </div>
                  <div>
                    <div class="house-label">面积：</div>
                    {{item.area}}m
                  </div>
                  <div>
                    <div class="house-label">装修：</div>
                    {{item.fill}}
                  </div>
                </div>

                <div class="img-box">
                  <van-row gutter="5">
                    <van-col span="8" v-for="(img,i) in item.img_list" :key="i">
                      <div class="house-img" :style="`background-image: url(${$getUrl(img)});`"></div>
                    </van-col>
                  </van-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>