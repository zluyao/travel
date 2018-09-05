<template>
    <div class="detail"  v-if="content">
        <section class="img" v-show="!swiperOn">
            <header class="head">
                <router-link class="head-icon" to="/"><i  class="iconfont"></i></router-link>
            </header>
            <div >
                <img class="img-head" :src="content.bannerImg" :alt="content.sightName">
                <div class="img-des">
                    <h2 class="img-title">{{content.sightName}}</h2>
                    <div class="img-number">
                        <i class="iconfont"></i>
                        <span> {{content.galleryImgs.length}}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="categoryList" v-show="!swiperOn">
            <tree-menu :treelist="content.categoryList"></tree-menu>
        </section>
        <section class="swp" v-show="swiperOn">
            
        </section>
    </div>
</template>

<script>
  import treeMenu from '../../common/treemenu';

  export default {
    name: 'detail',
    components: {
      treeMenu
    },
    data () {
      return {
        content: null,
        swiperOn: false,
      };
    },
    created() {
      console.log(this.$route.params.id);
      this.$http.get('./api/detail')
        .then((res) => {
          this.content = res.data.data.data;
        }).catch((err) => {
          console.log(err);
        });
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
    .img-head{
        width: 100%;
    }
    .img-title{
        font-size: 18px;

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
</style>
