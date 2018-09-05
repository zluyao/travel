<template>
    <div class="home">
        <header class="head">
            <div class="head-back"><i class="iconfont"></i></div>
            <div class="head-search"><i class="iconfont icon-search"></i>输入城市/景点/游玩主题</div>
            <router-link class="head-place" to="/city">上海 <i class="icon-drop"></i></router-link>
        </header>
        <section class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide  class="swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id"><img class="swp-img" :src="slide.imgUrl" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <section class="icon">
            <swiper :options="iconSwiperOption">
                <swiper-slide  class="icon-silde">
                    <ul>
                        <li v-for="(slide, key) in iconsList" :key="key" data-id="slide.id">{{slide.text}}</li>
                    </ul>
                </swiper-slide>
                <swiper-slide  class="icon-silde">
                    <ul>
                        <li v-for="(slide, key) in iconsList" :key="key" data-id="slide.id">{{slide.text}}</li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <section class="favorite">
            <h3 class="like-head"><i class="iconfont icon-like"></i>猜你喜欢</h3>
            <ul class="like-ul">
                <li v-for="item in favoriteList">{{item.title}}</li>
            </ul>
        </section>
        <section class="week">
            <h3>周末去哪儿</h3>
            <ul>
                <li v-for="item in weekendList">{{item.title}}</li>
            </ul>
        </section>
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
        swiperOption: {
          pagination: { el: '.swiper-pagination' },
          autoplay: {
            disableOnInteraction: false,
            delay: 3000, // 自动切换的时间间隔（单位ms）
          },
        },
        iconSwiperOption: {
          pagination: { el: '.swiper-pagination' },
        },
        swiperList: [],
        iconsList: [],
        favoriteList: [],
        weekendList: [],
      };
    },
    created() {
      this.$http.get('./api/home')
        .then((res) => {
          this.content = res.data.data;
          this.swiperList = this.content.data.swiperList;
          this.iconsList = this.content.data.iconsList;
          this.favoriteList = this.content.data.recommendList;
          this.weekendList = this.content.data.weekendList;
          console.log(this.iconsList);
        }).catch((err) => {
          console.log(err);
        });
    },
    methods: {
    },
  };
</script>

<style >
.swiper-pagination-bullet-active{
    background-color: #FFF;
}
</style>
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
    .swiper{
        height: 100px;
    }
    .swp-silde{
        height: 100%;
    }
    .swp-img{
        height: 100%;
        width: 100%;
    }
</style>
