import { createStore } from 'vuex'
import { getMusicLyric } from '@/network/api/musicDetail.js'
export default createStore({
  state: {
    playList: [{
      al: {
        id: 3056775,
        pic: 6633353651510766,
        name: "有幸",
        picUrl: "https://p2.music.126.net/vmTcCQcgoPE2bLJ9BQd4sw==/6633353651510766.jpg",
      },
      id: 29751518,
      ar: [{
        name: "シティーハンター dramatic master",
      }],
      // name: "シティーハンター dramatic master",
    }],
    playListIndex: 0,
    isBtnShow: true,//暂停按钮的显示,
    detailShow: false,
    currentTime: 0,
    duration: 0,
    lyricList: {
    }
  },
  mutations: {
    updataIsBtnShow(state, value) {
      state.isBtnShow = value
    },
    updatePlayList(state, value) {
      state.playList = value
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList: function (state, value) {
      state.lyricList = value
    },
    updateCurrentTime: function (state, value) {
      state.currentTime = value
      console.log(state.currentTime)
    },
    updateDuration(state, value) {
      state.duration = value
    }
  },
  actions: {
    //通过axios获取歌词
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      context.commit("updateLyricList", res.data.lrc)
      console.log(res)
    }

  },
  modules: {
  }
})
