<template>
  <div class="top-item">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg"/>
    <div class="item-left">
    <van-icon name="arrow-left" size="40" @click="this.$router.go(-1)"/>
    <span class="text">歌单</span> </div>
  <div class="item-right"> 
    <van-icon name="search" size="40"/>
    <van-icon name="notes-o" size="40"/> 
    </div>
  </div>
  <div class="center-item">

    <img :src="playlist.coverImgUrl" alt="" class="left-img"/>

  </div>
  <div class="footer-item">
    <van-icon name="chat-o" badge="40" size="40" />
    <van-icon name="service-o" size="40"/>
     <van-icon name="down" size="40" />
     <van-icon name="replay" size="40"/>
  </div>
</template>

<script>
export default {
    name: "musicTop",
    props: ['playlist'],
    setup(props) {
          console.log(props.playlist);}
}

</script>

<style lang="less" scoped>
.top-item{
    width:100%;
    height: 1rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: .2rem;
    position: relative;
    .item-left,.item-right{
         display: flex;
         align-items: center;
         width: 25%;
         justify-content:space-between;
         span{
            font-size: .4rem;
            color:#fff;
         }
    }
    .van-icon{
        color: #fff;
    }
    .bgimg{
        width: 100%;
        height: 10rem;
        position: absolute;
        z-index: -1;
        filter: blur(30px);
    }
}
.center-item{
  display: flex;
  .left-img{
    width: 4rem;
    height: 4rem;
    padding: .2rem;
  }
}
.footer-item{
  display: flex;
  justify-content: space-around;
}
</style>