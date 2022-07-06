<template>

  <router-view/>
    <footer-music></footer-music>
</template>

<script>
import footerMusic from './components/item/footerMusic.vue'
export default {
  name: "App",
  components: {
    footerMusic
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
