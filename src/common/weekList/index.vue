<template>
    <router-link class="week-link" :to="'/detail/' + weekId">
        <img class="week-img" :src="imgUrl" :alt="weekTitle">
        <div class="week-content">
            <h4 class="week-title">{{weekTitle}}</h4>
            <aside class="week-des">{{desc}}</aside>
        </div>
    </router-link>
</template>

<script>
  export default {
    name: 'week',
    data () {
      return {
      };
    },
    props: ['weekTitle', 'weekId', 'imgUrl', 'desc'],
    created() {
    },
  };
</script>

<style scoped>
    .week-link{
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        color: #333;
    }
    .week-img{
        height: 140px;
        width: 100%;
    }
    .week-content{
        padding: 12px;
    }
    .week-title{
        font-size: 14px;
    }
    .week-des{
        font-size: 12px;
        margin-top: 8px;
        line-height: 20px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
