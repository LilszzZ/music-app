<template>
  <div class="search-top">
    <van-icon name="arrow-left" size="25"/>
    <input placeholder="搜索" v-model="searchKey" @keydown.enter="searchFunc">
  </div>
  <div class="history">
    <span class="searchK">历史记录：</span>
    <span v-for="item in keyWords " :key="item" class="span-key">{{item}}</span>
    <van-icon name="delete-o" size="35" class="delete"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            keyWords: [],
            searchKey:""
        }
    },
    mounted() {
      this.keyWords=JSON.parse(localStorage.getItem("keyWords"))  
    },
    methods: {
        searchFunc:function() {
            this.keyWords.push(this.searchKey)
            localStorage.setItem("keyWords",JSON.stringify(this.keyWords))
            this.searchKey=""
      } , 
    }
}
</script>

<style lang="less" scoped>
.search-top{
    width: 100%;
    height: 1rem;
    display: flex;
    padding: .2rem;
    align-items: center;
    input{
        margin-left: .2rem;
        border: none;
        border-bottom: .02rem solid;
        height: 0.6rem;
        width: 85%;
    }
}
    .history{
        position: relative;
       .searchK{
        font-weight: 600;
        font-size: .4rem;
       }
       .span-key{
        background-color: cadetblue;
        margin-right: .2rem;
        font-size: .4rem;
        border-radius: 20px;
       }
       .delete{
        position: absolute;
        right: 10px;
       }
    }
</style>