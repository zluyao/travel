<template>
    <div class="detail" v-if="content">
        <transition name="main" class="main">
            <div v-show="!swiperOn">
                <section class="img">
                    <header class="head">
                        <router-link class="head-icon" to="/"><i class="iconfont"></i></router-link>
                    </header>
                    <header class="head-top" :style="{ opacity: myOpacity }">
                        <router-link class="head-icon-top" to="/"><i class="iconfont icon-back"></i>{{content.sightName}}</router-link>
                    </header>
                    <div class="img-detail" @click="swiperOn=true" >
                        <img class="img-src" :src="content.bannerImg" :alt="content.sightName">
                        <div class="img-des">
                            <h2 class="img-title">{{content.sightName}}</h2>
                            <div class="img-number">
                                <i class="iconfont"></i>
                                <span> {{content.galleryImgs.length}}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="categoryList">
                    <tree-menu :treelist="content.categoryList"></tree-menu>
                </section>
            </div>
        </transition>
        <transition name="fade" class="fade">
            <section class="swp" v-show="swiperOn" @click="swiperOn=false">
                <swiper class="swp-container" :options="swiperOption">
                    <swiper-slide  class="swp-silde" v-for="(slide, key) in content.galleryImgs" :key="key" data-id="slide.id">
                        <img class="swp-img" :src="slide" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </section>
        </transition>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import treeMenu from '../../common/treemenu';

  export default {
    name: 'detail',
    components: {
      swiper,
      swiperSlide,
      treeMenu
    },
    data () {
      return {
        content: null,
        scroll: null,
        swiperOn: false,
        myOpacity: 0,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          effect: 'coverflow',
        },
      };
    },
    created() {
      this.$http.get('./api/detail')
        .then((res) => {
          this.content = res.data.data.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    methods: {
      menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scroll > 50) {
          if (this.scroll < 120) {
            this.myOpacity = (this.scroll - 50) / 70;
          } else {
            this.myOpacity = 1;
          }
        } else {
          this.myOpacity = 0;
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.menu);
    },
  };
</script>

<style scoped>
    .img{
        position: relative;
        color: #FFF;
    }
    .head{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        padding: 6px;
    }
    .head-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.5);
        font-size: 19px;
        font-weight: 900;
        color: #FFF;
    }
    .head-top{
        z-index: 110;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 44px;
        font-size: 19px;
        line-height: 44px;
        background-color: #00bcd4;
    }
    .head-icon-top{
        display: block;
        position: relative;
        text-align: center;
        color: #FFF;
    }
    .icon-back{
        position: absolute;
        top: 0;
        left: 16px;
        color: #FFF;
        font-size: 19px;
        font-weight: 900;
    }
    .img-des{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 12px;
        line-height: 22px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
    }
    .img-detail{
        position: relative;
    }
    .img-src{
        display: block;
        width: 100%;
    }
    .img-title{
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .img-number{
        font-size: 10px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 22px;
    }
    .img-number .iconfont{
        margin-right: 5px;
    }
    .fade{
        height: 100vh;
        width: 100vw;
    }
    .main-enter-active, .main-leave-active,
    .fade-enter-active, .fade-leave-active {
         transition: opacity .5s;
     }
    .main-enter, .main-leave-to,
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .swp{
        height: 100vh;
        width: 100vw;
        background-color: #000;
    }
    .swp{
        height: 100vh;
        width: 100vw;
        background-color: #000;
    }
    .swp-container{
        display: flex;
        align-items: center;
        height: 100vh;
    }
    .swp-silde{
        display: flex;
        align-items: center;
    }
    .swp-img{
        width: 100vw;
    }
    .detail .swiper-pagination-fraction{
        color: #FFF; /* 改变轮播图下方分页数字颜色*/
    }
</style>
