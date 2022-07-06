<template>
 <div class="footer">
   <div class="footer-left" @click="updateDetailShow">
    <img :src="playList[playListIndex].al.picUrl"/>
    <div class="musictext">
       <p>{{playList[playListIndex].name}}</p>
       <span>横划切换歌曲</span>
    </div>
</div>
   <div class="footer-right">
       <van-icon name="play-circle-o" size='40' @click="play" v-if="isBtnShow" />
       <van-icon name="pause-circle-o" size='40' @click="play" v-else="isBtnShow" />
       <van-icon name="orders-o" size='40'/>
   </div>
   <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
     <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%' ,width:'100%'}" >  
     <pop-detail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isBtnShow" :addDuration="addDuration"></pop-detail>
     </van-popup>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
import PopDetail from './popDetail.vue'
export default {
  data() {
    return {
        interVal:0
      }
    },
    computed: {
        ...mapState(["playList", "playListIndex", "isBtnShow", "detailShow","duration"])
    },
    methods: {
        play: function () {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.updataIsBtnShow(false);
                this.updateTime();
            }
            else {
                this.$refs.audio.pause();
              this.updataIsBtnShow(true);
                clearInterval(this.interVal)
            }
      },
      updateTime: function () {
        this.interVal = setInterval(() => {
              this.updateCurrentTime(this.$refs.audio.currentTime)
          })
      },
      addDuration: function () {
          this.updateDuration(this.$refs.audio.duration)
        },
        ...mapMutations(["updataIsBtnShow", "updateDetailShow","updateCurrentTime","updateDuration"]),
  },
    mounted() {
       this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
      this.updateCurrentTime(this.$refs.audio.currentTime)
       
    },
    updated() {
      this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
       this.addDuration
    },
    watch: {
        playListIndex: function () {
            this.$refs.audio.autoplay = true;
            if (this.$refs.audio.paused) {
                this.updataIsBtnShow(false);
            }
        },
        playList: function () {
            if (this.isBtnShow) {
                this.$refs.audio.autoplay = true;
              this.updataIsBtnShow(false);
                
            }
      },
        
    },
    components: { PopDetail }
}

</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    width: 100%;
    height: 1.2rem;
    background-color: #fff;
    bottom:0;
    border-top: 1px solid #999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .footer-left{
      width: 70%;
      height: 100%;
      display: flex;
     img{
      height: 1.5rem;
      width: 1.5rem;
    }
    .musictext{
      p{font-size: 0.1rem;}
    }
    }
    .footer-right{
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      .van-icon{
        padding-right: 15px;
      }
    }
}
</style>