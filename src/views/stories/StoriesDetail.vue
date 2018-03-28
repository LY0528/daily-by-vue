<template>
  <div>
    <link
      v-for="item in detailData.css"
      :key="item.id"
      rel="stylesheet"
      :href="item">
    <div class="basic-info">
      <div
        class="top-img"
        v-if="detailData.image">
        <img :src="detailData.image" alt="">
      </div>
    </div>
    <div v-html="detailData.body"></div>
    <div class="handle">
      <i
        class="iconfont icon-last"
        @click="pageTurn('pre')">

      </i>
      <i
        class="iconfont icon-next"
        @click="pageTurn('next')">

      </i>
    </div>
  </div>
</template>

<script>
  import { request } from '@/utils/request'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        detailData: {},
        id: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters([
        'storiesList'
      ])
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        request(`news/${this.id}`, {

        }).then(res => {
          this.detailData = res.data
        }, error => {
          console.log(error)
        })
      },
      pageTurn (type) {
        let id = this.id
        this.storiesList.list.forEach((v, i) => {
          if (type === 'pre' && Number(v) === Number(this.id)) {
            if (typeof this.storiesList.list[i - 1] === 'undefined') {
              return this.$vux.toast.text('前面没有了哦！')
            }
            id = this.storiesList.list[i - 1]
          } else if (type === 'next' && Number(v) === Number(this.id)) {
            if (typeof this.storiesList.list[i + 1] === 'undefined') {
              return this.$vux.toast.text('后面没有了哦！')
            }
            id = this.storiesList.list[i + 1]
          }
        })
        this.$router.push({
          path: `/stories/${id}`
        })
      }
    },
    watch: {
      $route (to) {
        this.id = to.params.id
        this.getData()
      }
    }
  }
</script>

<style lang="less" scoped>
  .handle{
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconfont{
      background: #f5f4f9;
      padding: 10px;
    }
  }
.basic-info{
  .top-img{
    img{
      display: block;
      width: 100%;
      height: 240px;
    }
  }
}
.headline .img-place-holder{
  height: 0;
}
</style>
