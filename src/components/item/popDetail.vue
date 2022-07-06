<template>  
  <div>
    <img class="bgc-img" :src="musicList.al.picUrl"/> 
    <div class="top"> 
        <div class="top-left">
            <van-icon name="arrow-left" size="40" @click="backHome" />
            <div class="text"> 
                <Vue3Marquee>{{musicList.name}}</Vue3Marquee> 
                <span>{{musicList.ar[0].name}}</span></div>
            </div>
        <div class="top-right"><van-icon name="share-o"  size="40"/></div>
    </div>
    <div class="content" v-show="!isLyricShow">
            <img src="@/assets/needle-ab.png" alt="" class="img_needle" />
           <img src="@/assets/cd.png" alt="" class="img_cd" />
           <img :src="musicList.al.picUrl" @click="isLyricShow=true"  class="img_al"/>

    </div>
    <div class="lyric" ref="musicLyric" v-show="isLyricShow">

                 <p
      v-for="item in lyric"
      :key="item"
      :class="{
        active:
          currentTime * 1000 >= item.time && currentTime * 1000 < item.pre,
      }">   {{item.lrc}} </p>
    </div>
    <div class="detailFooter">
    <div class="footerTop">
      <van-icon name="like-o" size="40"/>
      <van-icon name="down" size="40"/>
      <van-icon name="music-o" size="40"/>
      <van-icon name="description" size="40"/>
      <van-icon name="discount" size="40"/>
    </div>
    <div class="footerContent">
      <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
    </div>
    <div class="footer">
         <van-icon name="revoke" size="40"/>
         <van-icon name="arrow-left" size="40" @click="goPlay(-1)"/>
         <van-icon name="play-circle-o" size="40" @click="play" v-if="isbtnShow"/>
         <van-icon name="pause-circle-o" size="40" @click="play" v-else="isbtnShow" />
         <van-icon name="arrow" size="40" @click="goPlay(1)"/>
         <van-icon name="apps-o" size="40"/>
         
    </div>
  </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  name:"popDetail",
  data() {
    return {
      isLyricShow: false,
    };
  },
  computed: {
    ...mapState(["lyricList", "currentTime", "playListIndex", "playList",'duration',]),
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min,sec,Number(mill),lrc);
          return { min, sec, mill, lrc, time };
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      console.log(arr);
      return arr;
    },
  },
  mounted() {
    // console.log(this.musicList);
    // console.log(this.lyricList.lyric);
    this.addDuration()
  },
  props: ["musicList", "isbtnShow", "play",'addDuration'],
  methods: {
    backHome: function () {
      this.isLyricShow = false;
      this.updateDetailShow();
    },
    goPlay: function (num) {
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      this.updatePlayListIndex(index);
    },
    ...mapMutations(["updateDetailShow", "updatePlayListIndex"]),
  },
  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector("p.active");
      // console.log([p]);
      if (p) {
        if (p.offsetTop > 300) {
          this.$refs.musicLyric.scrollTop = p.offsetTop - 300;
        }
      }
      // if(newValue===this.duration){
      //   if(this.playListIndex===this.playList.length-1){
      //     this.updatePlayListIndex(0);
      //     this.play()
      //   }else{
      //      this.updatePlayListIndex(this.playListIndex+1);
      //   }
      // }
      // console.log([this.$refs.musicLyric])
    },
  },
  components: {
    Vue3Marquee,
  },
};
</script>
<style lang="less" scoped>
    .bgc-img{
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        filter: blur(50px);
    }
    .top{
        height: 1.5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top-left{
            display: flex;

        }

        .top-right{
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    .content{
        width: 100%;
        height: 9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
         .img_needle {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }

  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_al {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_al_active {
    animation-play-state: running;
  }
  .img_al_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
    }
    .detailFooter {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.36rem;
      height: 0.36rem;
      fill: rgb(245, 234, 234);
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .range {
    width: 100%;
    height: 0.06rem;
  }
  .footer {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
  .lyric {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  overflow: scroll;
  p {
    color: rgb(190, 181, 181);
    margin-bottom: 0.3rem;
  }
  .active {
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>