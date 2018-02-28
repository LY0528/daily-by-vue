<template>
  <div class="hello">
    <input type="text" v-model="count">
    <button @click='addCount'>点击</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hhhh: ''
    }
  },
  computed: {
    count: {
      get () {
        return this.$store.state.test1.a
      },
      set (value) {
        this.$store.dispatch('checkout', value)
      }
    }
  },
  created () {},
  methods: {
    addCount () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
