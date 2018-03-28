<template>
  <div>
    <x-header>
      <span></span>
      <x-icon
        slot="overwrite-left"
        type="navicon"
        size="35"
        style="fill:#fff;position:relative;top:-8px;left:-3px;"
        @click="handleDrawer"></x-icon>
    </x-header>
    <swiper :aspect-ratio="1/1.5">
      <swiper-item
        class="swiper-demo-img"
        v-for="(item, index) in topList"
        :key="index"
        @click.native="storiesDetail(item.id)">
        <img :src="item.image">
        <p class="title">{{item.title}}</p>
      </swiper-item>
    </swiper>
    <flexbox orient="vertical">
      <flexbox-item
        v-for="item in storieList"
        :key="item.id"
        @click.native="storiesDetail(item.id)">
        <div class="item-list card-box-shadow">
          <div class="left">
            <img :src="item.images[0]" alt="">
          </div>
          <div class="right">{{item.title}}</div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Flexbox, FlexboxItem, XHeader } from 'vux'
  import { request } from '@/utils/request'
  export default {
    components: {
      Swiper,
      SwiperItem,
      Flexbox,
      FlexboxItem,
      XHeader
    },
    data () {
      return {
        topList: [],
        storieList: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        request('news/latest', {

        }).then(res => {
          this.topList = res.data.top_stories
          this.storieList = res.data.stories
          this.$store.dispatch('ToggleStoriesList', {
            list: this.setNewArray(this.storieList)
          })
        }, error => {
          console.log(error)
        })
      },
      handleDrawer () {
        this.$emit('isShow', true)
      },
      storiesDetail (id) {
        this.$router.push({
          path: `/stories/${id}`
        })
      },
      setNewArray (list) {
        const arr = []
        list.forEach(v => {
          arr.push(v.id)
        })
        return arr
      }
    }
  }
</script>

<style lang="less" scoped>
.swiper-demo-img {
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .title{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    text-align: center;
    color:#fff;
    background: rgba(0,0,0,.05)
  }
}
.vux-flexbox-item{
  margin-bottom: 10px;
}
.item-list{
  padding: 10px;
  background: #fff;
  .left{
    width: 80px;
    height: 80px;
    margin-right: 10px;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>
