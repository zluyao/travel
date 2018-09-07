<template>
    <div class="home">
        <header class="head">
            <div class="head-back"><i class="iconfont"></i></div>
            <div class="head-search"><i class="iconfont icon-search"></i>输入城市/景点/游玩主题</div>
            <router-link class="head-place" to="/city">{{city}} <i class="icon-drop"></i></router-link>
        </header>
        <section class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide  class="swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id"><img class="swp-img" :src="slide.imgUrl" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <section class="icons">
            <swiper :options="iconSwiperOption">
                <swiper-slide  class="icons-silde"  v-for="(slide, key) in iconsList" :key="key" >
                    <ul class="icons-ul">
                        <li class="icons-li" v-for="(value, key) in slide" :key="key" data-id="value.id">
                            <router-link class="icons-link" to="/">
                                <img class="icons-img" :src="value.imgSrc" alt="">
                                <span>{{value.text}}</span>
                            </router-link>
                        </li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <section class="favorite">
            <h3 class="like-head border-bottom"><i class="iconfont icon-like"></i> 猜你喜欢</h3>
            <ul class="like-ul">
                <li class="like-li" v-for="item in favoriteList">
                    <my-favorite :likeTitle="item.title"
                                 :likeId="item.id"
                                 :imgUrl="item.imgUrl"
                                 :desc="item.desc"></my-favorite>
                </li>
            </ul>
        </section>
        <section class="week">
            <h3 class="week-head">周末去哪儿</h3>
            <li class="week-li" v-for="item in weekendList">
                <my-week :weekTitle="item.title"
                             :weekId="item.id"
                             :imgUrl="item.imgUrl"
                             :desc="item.desc"></my-week>
            </li>
        </section>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import myFavorite from '../../common/favoriteList';
  import myWeek from '../../common/weekList';

  export default {
    name: 'home',
    components: {
      swiper,
      swiperSlide,
      myFavorite,
      myWeek
    },
    data () {
      return {
        swiperOption: {
          pagination: { el: '.swiper-pagination' },
          autoplay: {
            disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
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
    computed: {
      city: function() {
        console.log(this.$store.state.city);
        return this.$store.state.city;
      }
    },
    created() {
      this.$http.get('./api/home')
        .then((res) => {
          this.content = res.data.data;
          this.swiperList = this.content.data.swiperList;
          this.favoriteList = this.content.data.recommendList;
          this.weekendList = this.content.data.weekendList;
          this.iconsList = this.arrTrans(8, this.content.data.iconsList);
        }).catch((err) => {
          console.log(err);
        });
    },
    methods: {
      arrTrans: function(num, arr) { // 一维数组转换为二维数组
        let iconsArr = []; // 声明数组
        for (let i = 0; i < Math.ceil(arr.length / num); i++) {
          iconsArr[i] = []; // 声明该数组第一个元素为一个数组
          for (let j = 0; j < num && j + num * i < arr.length; j++) {
            iconsArr[i].push(arr[j + num * i]);
          }
        }
        return iconsArr;
      },
    },
  };
</script>

<style >
.home .swiper-pagination-bullet-active{
    background-color: #FFF; /* 改变轮播图下方分页按钮颜色*/
}
</style>
<style scoped>
    .home{
        background-color: #F5F5F5;
    }
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
    .swp-silde{
        height: 100%;
    }
    .swp-img{
        height: 100%;
        width: 100%;
    }
    .icons{
        height: 190px;
        margin: 6px 0 8px;
        background-color: #FFF;
    }
    .icons-silde{
        height: 190px;
    }
    .icons-ul{
        display: flex;
        flex-wrap: wrap;
    }
    .icons-li{
        flex: 0 1 25%;
        margin: 5px 0;
    }
    .icons-link{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #333;
        text-decoration: none;
    }
    .icons-img{
        height: 55px;
        width: 55px;
    }
    .favorite{
        background-color: #FFF;
    }
    .like-head{
        padding: 8px 12px;
        line-height: 26px;
        font-size: 16px;
    }
    .icon-like{
        color: #ff6b48;
    }
    .like-ul{
        display: flex;
        flex-direction: column;
        padding: 5px 10px;
    }
    .like-li{
        margin: 6px 0;
    }
    .week-head{
        padding: 8px 12px;
        line-height: 26px;
        color: #666;
    }
</style>
