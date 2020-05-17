<template>
  <div id="info">
    <div class="recharge">
      <div class="balance">
        <div class="balance-money">{{parentYue}}</div>
        <div class="balance-title">账户余额</div>
      </div>
      <div class="balance-btn">
        <van-button type="default" size="small">充值</van-button>
      </div>
    </div>
    <div class="title">注册信息</div>
    <div class="info">
      <van-cell-group>
        <van-cell title="注册手机号" :value="parentQuery.root_user_id"></van-cell>
        <van-cell title="城市" :value="parentQuery.dada_data.city_name"></van-cell>
        <van-cell title="企业全称" :value="parentQuery.dada_data.enterprise_name"></van-cell>
        <van-cell title="企业地址" :value="parentQuery.dada_data.enterprise_address"></van-cell>
        <van-cell title="联系人姓名" :value="parentQuery.dada_data.contact_name"></van-cell>
        <van-cell title="联系人电话" :value="parentQuery.dada_data.contact_phone"></van-cell>
        <van-cell title="邮箱地址" :value="parentQuery.dada_data.email"></van-cell>
        <van-cell title="商户编号" :value="parentQuery.dada_source_id"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script src="./dadaInfo.js"></script>
<style lang="scss" scoped>
@import "dadaInfo.scss";
</style>