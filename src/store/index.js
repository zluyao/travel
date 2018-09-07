import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'; // 如果不是production环境，为true

export default new Vuex.Store({
  state: {
    city: '深圳'
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
  }
});
