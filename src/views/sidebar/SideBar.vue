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
        :key="item.id"
        :class="{'active':item.active}"
        @click.native="switchTheme(item)">
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
  import { mapGetters } from 'vuex'
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
    computed: {
      ...mapGetters([
        'sidebarId'
      ])
    },
    created () {
      this.getThemes()
    },
    methods: {
      getThemes () {
        request('themes', {

        }).then(res => {
          this.themes = res.data.others
          this.themes.forEach(v => {
            if (typeof this.sidebarId.id !== 'undefined' && v.id === Number(this.sidebarId.id)) {
              this.$set(v, 'active', true)
            } else {
              this.$set(v, 'active', false)
            }
          })
        }, error => {
          console.log(error)
        })
      },
      switchTheme (item) {
        this.themes.forEach(v => {
          v.active = false
        })
        item.active = true
        this.$store.dispatch('ToggleSidebar', { id: item.id })
        this.$router.push({
          path: `/themeDetail/${item.id}`
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
  .vux-header{
    background: #819397;
  }
  .vux-flexbox-item.active{
     background: #94acb3;
    color: #fff;
   }

</style>
