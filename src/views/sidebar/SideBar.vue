<template>
  <div class="content">
    <x-header
      class="sidebar-header"
      :left-options="{showBack: false}">
      栏目分类
    </x-header>
    <flexbox orient="vertical">
      <flexbox-item
        class="vux-1px-b"
        v-for="item in themes"
        :key="item.id">
        <div class="item-list">
          <div class="left">
            <img :src="item.thumbnail" alt="">
          </div>
          <div class="right">{{item.name}}</div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem } from 'vux'
  import { request } from '@/utils/request'
  export default {
    components: {
      XHeader,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        themes: []
      }
    },
    created () {
      this.getThemes()
    },
    methods: {
      getThemes () {
        request('themes', {

        }).then(res => {
          this.themes = res.data.others
        }, error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    height: 100%;
    .item-list{
      padding: 10px 5px;
      .left{
        width: 32px;
        height: 32px;
        margin-right: 5px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
  .vux-header,
  .vux-flexbox-item.active{
    background: #7a9097;
  }

</style>
