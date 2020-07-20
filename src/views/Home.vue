<template>
  <div class="home">
      <a-button @click="handleClickToAbout">跳转</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  name: 'Home',
  components: {
    'a-button': Button
  },
  methods: {
    handleClickToAbout () {
      console.log(111)
      this.$router.push({
        name: 'about'
      })
    }
  }
}
</script>
