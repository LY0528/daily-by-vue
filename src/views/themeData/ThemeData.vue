<template>
  <div>
    <div class="basic-info">
      <img :src="themeData.background" alt="">
      <div class="intro font-18 font-color-fff">{{themeData.description}}</div>
      <div class="name font-18 font-color-fff">————{{themeData.name}}</div>
    </div>
    <flexbox class="stories" orient="vertical">
      <flexbox-item
        v-for="item in themeData.stories"
        :key="item.id"
        @click.native="storiesDetail(item.id)">
        <div class="item-list card-box-shadow">
          <div class="left">
            <img :src="item.images && item.images[0]" alt="">
          </div>
          <div class="right">{{item.title}}</div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { request } from '@/utils/request'
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        themeData: {},
        id: this.$route.params.id
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail () {
        request(`theme/${this.id}`, {

        }).then(res => {
          this.themeData = res.data
          this.$store.dispatch('ToggleStoriesList', {
            list: this.setNewArray(this.themeData.stories)
          })
        }, error => {
          console.log(error)
        })
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
  .basic-info{
    position: relative;
    img{
      display: block;
      width: 100%;
      height: 240px;
      filter: opacity(70%);
    }
    .intro,
    .name{
      position: absolute;
      right: 0;
    }
    .intro{
      top: 80px;
    }
    .name{
      bottom: 30px;
    }
  }
  .stories{
    .vux-flexbox-item{
      margin-bottom: 10px;
    }
    .item-list{
      padding: 10px;
      background: #fff;
      .left{
        max-width: 64px;
        max-height: 64px;
        margin-right: 10px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
