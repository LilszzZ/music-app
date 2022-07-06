<template>
<div class="home">
    <NavBar></NavBar>
    <Swiper></Swiper>
    <IconList></IconList>
    <MusicList></MusicList>
</div>
</template>

<script>
import NavBar from '@/components/home/navbar/NavBar.vue';
import Swiper from '@/components/home/swiper/Swiper.vue';
import IconList from '../components/home/iconlist/IconList.vue';
import MusicList from '../components/home/musiclist/MusicList.vue';
export default {
    name: "Home",
    components: { NavBar, Swiper, IconList, MusicList }
}
</script>

<style>

</style>
