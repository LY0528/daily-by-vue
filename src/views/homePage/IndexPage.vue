<template>
  <div class="content" :class="{'is-hidden':isShow}">
    <drawer
      :show="isShow"
      show-mode="overlay"
      placement="left"
      @update:show="hideMask">
      <div slot="drawer" class="side-bar">
        <side-bar>

        </side-bar>
      </div>
      <content-page
      @isShow="changeIsShow">

      </content-page>
    </drawer>
  </div>
</template>

<script>
import { Drawer } from 'vux'
import SideBar from '@/views/sidebar/SideBar'
import ContentPage from '@/views/homePage/ContentPage'
export default {
  components: {
    Drawer,
    SideBar,
    ContentPage
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    changeIsShow (val) {
      this.isShow = val
    },
    hideMask (val) {
      this.isShow = val
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  height: 100%;
  &.is-hidden{
    overflow: hidden;
  }
  .side-bar{
    width: 200px;
    height: 100%;
  }
}

</style>
