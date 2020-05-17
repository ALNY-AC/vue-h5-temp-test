<template>
  <div class="upload">
    <el-upload :headers="headers" :show-file-list="false" :action="$Url.uploadUrl+`/file/upload`" :on-success="onSuccess">
      <slot>
        <el-button icon="el-icon-upload"></el-button>
      </slot>
    </el-upload>
  </div>
</template>
<script src="./Upload.js"></script>
<style lang="scss" scoped>
@import "Upload.scss";
</style>