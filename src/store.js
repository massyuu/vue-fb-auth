import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    status: false
  },
  mutations: {
    onAuthStateChanged(state, user) {
      // Firebaseからのユーザー情報を保持する
      state.user = user
    },
    onUserStatusChanged(state, status) {
      // ログイン状態（ログイン or 未ログイン）
      state.status = status
    }
  },
  getters: {
    user(state) {
      // ユーザー情報を返す
      return state.user
    },
    isLogin(state) {
      // ログイン状態を返す
      return state.status
    }
  }
})
