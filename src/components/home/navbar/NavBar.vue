<template>
  <div class="nav-bar">
    <div><van-icon name="chat-o" size="40" /></div>
    <div class="top-content">
        <span class="active">我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <div><van-icon name="chat-o" size="40" /></div>
  </div>
</template>

<script>
export default {
name:"NavBar"
}
</script>

<style lang="less" scoped>
.nav-bar{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    .top-content{
    font-size: 18px;
    width: 70%;
    display: flex;
    justify-content:space-around;
    .active{
        font-weight: 1000;
    }
    }
}
</style>