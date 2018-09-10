<template>
    <section class="city">
        <header class="head">
            <div class="head-title">
                <router-link to="/"><i class="iconfont icon-back"></i></router-link>
                <span>城市选择</span>
            </div>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input class="search-input" type="text" v-model="search"  placeholder="请输入城市名或拼音">
            </div>
        </header>
        <section class="search-des"  v-show="search">
            <div class="wrapper" ref="searchWrapper">
                <ul  class="des-ul" v-show="searchResult">
                    <li  class="des-li" v-for="(value, key) in searchResult"
                             :data-index="value.id"
                             @click="changeCity"
                             :key="key">{{value.name}}</li>
                </ul>
            </div>
        </section>
        <section class="city-content" v-show="!search">
            <div class="wrapper" ref="cityWrapper">
                <ul class="city-ul">
                    <li>
                        <h4 class="city-index">热门城市</h4>
                        <ul class="hot-city-list">
                            <li class="hot-city-name" v-for="(value, key) in hotCities"
                                :data-index="value.id"
                                @click="changeCity"
                                :key="key">{{value.name}}</li>
                        </ul>
                    </li>
                    <li v-for="(initials, key) in cities" :key="key" ref="listGroup">
                        <h4 class="city-index">{{key}}</h4>
                        <ul class="city-list">
                            <li class="city-name" v-for="(value, key) in initials"
                                :data-index="value.id"
                                @click="changeCity(value.name)"
                                :key="key">{{value.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="index-list">
                <ul class="index-ul">
                    <li class="index-li" v-for="(value, key, index) in cities"
                        :data-index="index"
                        :key="index"
                        @touchmove.stop.prevent="onShortcutMove"
                        @touchstart="onShortcutStart" >{{key}}</li>
                </ul>
            </div>
        </section>
    </section>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'city',
    data () {
      return {
        hotCities: null,
        cities: null,
        search: '',
        scroll: null,
        scrollTwo: null,
        touch: {},
      };
    },
    created() {
      // window.localStorage.setItem();
      // this.search = window.localStorage.getItem('search');
      this.$http.get('./api/city')
        .then((res) => {
          this.cities = res.data.data.data.cities;
          this.hotCities = res.data.data.data.hotCities;
          console.log(this.cities);
        }).catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        this._initSrcoll();
      }, 20);
    },
    activated() {
      this.search = '';
    },
    computed: {
      searchResult: function() {
        // window.localStorage.setItem('search', this.search);
        // 使用字符串检索
        let result = [];
        if (this.search !== null) {
          for (let key in this.cities) {
            for (let i = 0; i < this.cities[key].length; i++) {
              if (this.cities[key][i].name.includes(this.search)) {
                result.push(this.cities[key][i]);
              } else if (this.cities[key][i].spell.includes(this.search)) {
                result.push(this.cities[key][i]);
              }
            }
          }
        }
        return result;
      },
    },
    mounted() {
    },
    methods: {
      _initSrcoll () {
        this.scroll = new BScroll(this.$refs.cityWrapper, {
          probeType: 3, // 1 监听事件的触发时间，1为即时触发，3为延迟到事件完毕后触发
          click: true, // 是否启用click事件
        });
        this.scrollTwo = new BScroll(this.$refs.searchWrapper, {
          probeType: 3, // 1 监听事件的触发时间，1为即时触发，3为延迟到事件完毕后触发
          click: true, // 是否启用click事件
        });
      },
      onShortcutStart (e) {
        let index = e.target.getAttribute('data-index'); // 获取到绑定的 index
        if (index === this.touch.anchorIndex) {
          return false;
        }
        this.scroll.scrollToElement(this.$refs.listGroup[index]); // 使用 better-scroll 的 scrollToElement 方法实现跳转
        let firstTouch = e.touches[0].pageY; // 记录一下点击时候的 Y坐标 和 index
        this.touch.y1 = firstTouch;
        this.touch.anchorIndex = index;
      },
      onShortcutMove (e) { // 当手指在屏幕上滑动的时候连续地触发
        let touchMove = e.touches[0].pageY; // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
        this.touch.y2 = touchMove;
        let delta = Math.floor((this.touch.y2 - this.touch.y1) / 18); // 这里的 18 是索引元素的高度
        console.log(delta);
        // 计算最后的位置的index
        let index = this.touch.anchorIndex * 1 + delta; // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
        this.scroll.scrollToElement(this.$refs.listGroup[index]);
      },
      // changeCity (e) {
      //   let cityIndex = e.target.getAttribute('data-index') * 1;
      //   for (let key in this.cities) {
      //     for (let i = 0; i < this.cities[key].length; i++) {
      //       if (this.cities[key][i].id === cityIndex) {
      //         this.$store.commit('changeCity', this.cities[key][i].name);
      //         // window.localStorage.removeItem('search');
      //         this.$router.push({ path: '/' });
      //         return;
      //       }
      //     }
      //   }
      // },
      changeCity (city) {
        this.$store.commit('changeCity', city);
        this.$router.push({path: '/'});
      },
    },
  };
</script>

<style scoped>
    .city{
        height: 100vh;
    }
    .head{
        position: fixed;
        z-index: 199;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 84px;
        background-color: #00bcd4;
        color: #FFF;
        font-size: 16px;
    }
    .head-title{
        position: relative;
        text-align: center;
        line-height: 44px;
    }
    .icon-back{
        position: absolute;
        top: 0;
        left: 10px;
        color: #FFF;
        font-size: 18px;
    }
    .search{
        position: relative;
        margin: 0 10px 10px;
        height: 30px;
        line-height: 30px;
        background-color: #FFF;
        border-radius: 4px;
        color: #333;
    }
    .icon-search{
        position: absolute;
        padding: 0 10px;
        background-color: #FFF;
        border-radius: 4px;
    }
    .search-input{
        width: 100%;
        height: 30px;
        padding: 0 12px;
        text-align: center;
        border-radius: 4px;
        border: none;
        outline: none;
    }
    .search-des{
        height: 100vh;
    }
    .des-ul{
        display: flex;
        flex-direction: column;
        color: #212121;
    }
    .des-li{
        border-bottom: 1px solid #ddd;
        padding: 9px 10px;
    }
    .wrapper{
        position: absolute;
        top: 84px;
        left: 0;
        right: 0;
        bottom: 10px;
    }
    .city-content{
        height: 100vh;
        background-color: #f5f5f5;
    }
    .city-index{
        padding: 12px 15px;
        font-size: 12px;
        background-color: #f5f5f5;
    }
    .city-list, .hot-city-list{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
        background-color: #FFF;

    }
    .city-list::before, .hot-city-list::before{
        position: absolute;
        top: 0;
        bottom: 0;
        content: '';
        pointer-events: none;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }
    .city-list::before{
        left: 25%;
        right: 25%;
    }
    .hot-city-list::before{
        left: 33.3%;
        right: 33.3%;
    }
    .city-list::after{
         position: absolute;
         top: 0;
         bottom: 0;
         left: 50%;
         content: '';
         border-left: 1px solid #ddd;
     }
    .city-name, .hot-city-name{
        padding: 14px 0;
        text-align: center;
        margin-bottom: -1px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .city-name{
        flex: 0 1 25%;
    }
    .hot-city-name{
        flex: 0 1 33.33%;
    }
    .index-list{
        position: fixed;
        top: 84px;
        bottom: 0;
        right: 0;
        z-index: 99;
        display: flex;
    }
    .index-ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #00bcd4;
        text-align: center;
        font-size: 12px;
    }
    .index-li{
        padding: 3px 7px;
    }
</style>
