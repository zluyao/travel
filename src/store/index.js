import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'; // 如果不是production环境，为true
let defaultCity = '深圳';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (error) { }

export default new Vuex.Store({
  state: {
    city: defaultCity,
    province: '河南',
  },
  mutations: {
    changeCity (state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (error) {
        console.log(error);
      }
    },
  },
  strict: debug,
  getters: {
    doubleCity (state) {
      return state.province + ' ' + state.city;
    }
  }
});
