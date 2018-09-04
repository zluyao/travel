<template>
    <div class="home">
        <header class="head">
            <div class="head-back"><i class="iconfont"></i></div>
            <div class="head-search"><i class="iconfont icon-search"></i>输入城市/景点/游玩主题</div>
            <router-link class="head-place" to="/city">上海 <i class="icon-drop"></i></router-link>
        </header>
        <section class="sowing-map">

        </section>
        <section class="type-list">

        </section>
        <section class="favorite"></section>
        <section class="week"></section>

    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default {
    name: 'home',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
      };
    },
  };
</script>

<style scoped>
    .head{
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        height: 44px;
        color: #FFF;
        background-color: #00bcd4;
    }
    .head-back{
        line-height: 44px;
        margin: 0 15px 0 10px;
    }
    .head-back i{
        font-size: 18px;
    }
    .head-search{
        flex: 1;
        margin: 8px 0;
        padding: 0 8px;
        line-height: 28px;
        border-radius: 4px;
        background-color: #FFF;
        color: #CCC;
    }
    .head-search i{
        margin-right: 5px;
    }
    .head-place{
        margin: 0 10px;
        line-height: 44px;
        color: #FFF;
    }
    .icon-drop{
        display: inline-block;
        width: 0;
        height: 0;
        padding: 20px auto;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #FFF;
    }
</style>
