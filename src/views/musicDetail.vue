<template>
  <div>
   <musicTop :playlist="state.playlist"></musicTop>
  <MusicListApp
      :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"></MusicListApp>
 <div></div>
  </div>
</template>

<script>
import {getDetail,getMusicItemList} from '@/network/api/musicDetail.js'
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import MusicTop from '../components/item/musicTop.vue'
import MusicListApp from '../components/item/MusicListApp.vue'

// import { reactive } from 'vue'
export default {
    name: "musicDetail",
    setup() {
        let state = reactive({
          playlist: {}
          ,
          itemList: {}
        });
        onMounted(() => {
            let id = useRoute().query.id;
            getDetail(id).then((res) => {
                // console.log(res.data.playlist);
                state.playlist = res.data.playlist;
            });
          getMusicItemList(id).then((res) => {
           console.log(res);
           state.itemList = res.data.songs
        });

        });
      // sessionStorage.setItem('itemDetail', JSON.stringify(state))
        return { state };
    },
    components: { MusicTop,  MusicListApp }
}
</script>

<style lang="less" scoped>

  
</style>