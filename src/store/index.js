import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  // 指定用的是存储方式是本地存储
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    city: {
      label: "广州",
      pinyin: "guangzhou",
      short: "gz",
      value: "AREA|e4940177-c04c-383d"

    }
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    remove (state) {
      state.user = ''
    },
    city (state, payload) {
      state.city = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]  // 本地数据持久化

})
