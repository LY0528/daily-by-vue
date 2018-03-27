<template>
  <div>这里是主题详情</div>
</template>

<script>
  import { request } from '@/utils/request'
  export default {
    data () {
      return {
        detail: {},
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
          console.log(res)
        }, error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
