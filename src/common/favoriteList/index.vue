<template>
    <router-link class="like-link" :to="'/detail/' + likeId">
        <img class="like-img" :src="imgUrl" :alt="likeTitle">
        <div class="like-content">
            <div class="like-detail">
                <h4 class="like-title">{{likeTitle}}</h4>
                <aside class="like-des">{{desc}}</aside>
            </div>
            <div class="like-bottom">
                <span class="like-btn">查看详情</span>
            </div>
        </div>
    </router-link>
</template>

<script>
  export default {
    name: 'like',
    data () {
      return {
      };
    },
    props: ['likeTitle', 'likeId', 'imgUrl', 'desc'],
    created() {
    },
  };
</script>

<style scoped>
    .like-link{
        display: flex;
        color: #333;
    }
    .like-img{
        max-height: 100px;
        max-width: 100px;
    }
    .like-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }
    .like-title{
        font-size: 16px;
    }
    .like-des{
        margin-top: 8px;
        line-height: 20px;
        color: #666;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .like-btn{
        display: inline-block;
        padding: 4px 16px;
        background-color: #ff8300;
        color: #FFF;
        border-radius: 4px;
        font-size: 12px;
    }
</style>
