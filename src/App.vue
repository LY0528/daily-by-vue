<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import 'styles/common.less';
@import 'styles/resetVux';

body {
  background-color: #f4f5f9;
}
#app{
  height: 100%;
}
</style>
