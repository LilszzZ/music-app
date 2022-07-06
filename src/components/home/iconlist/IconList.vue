<template>
<div class="icon-list">
  <div class="icon-item">
    <div class="img"><van-icon name="live" size="50px"/></div>
    <span>每日推荐</span>
  </div>
  <div class="icon-item">
    <div class="img"><van-icon name="live" size="50px"/></div>
    <span>每日推荐</span>
  </div>
  <div class="icon-item">
    <div class="img"><van-icon name="live" size="50px"/></div>
    <span>每日推荐</span>
  </div>
  <div class="icon-item">
    <div class="img"><van-icon name="live" size="50px"/></div>
    <span>每日推荐</span>
  </div>
</div>
</template>

<script>
export default {
name:"IconList"
}
</script>

<style lang="less" scoped>
.icon-list{
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: space-around;
    align-items: center;
    .icon-item{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>