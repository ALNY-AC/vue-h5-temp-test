<template>
  <div class="ol-upload">
    <van-uploader :after-read="onRead" :success="updateInput">
      <slot>
  
      </slot>
    </van-uploader>
  </div>
</template>
<script src="./OlUpload.js"></script>
<style lang="scss" scoped>
@import "OlUpload.scss";
</style>