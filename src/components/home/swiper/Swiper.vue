<template>
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in state.images" :key="image">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { getBanners } from '@/network/api/home';
import { reactive,onMounted } from 'vue';
export default {
    name:"Swiper",
    setup() {
      const state = reactive({
        images: []
      })
        onMounted(() => {
        // axios.get('http://localhost:3000/banner?type=2').then((res) => {
        // console.log(res.data.banners)
        // state.images=res.data.banners
          // })
          state.images = getBanners().then((res)=> {
            state.images=res.data.banners
          })
        })
        return { state }
    },
};
</script>

<style lang="less">

  //需要在上面自己添加一个id
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }

    
</style>
