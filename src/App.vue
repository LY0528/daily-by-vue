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
@import 'styles/common.less';

body {
  background-color: #f4f5f9;
}
#app{
  height: 100%;
}
</style>
