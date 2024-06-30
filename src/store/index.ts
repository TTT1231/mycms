import { createStore } from 'vuex'
import LoginModule from './Login/login'
const store= createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     LoginService:LoginModule,
  }

})
export default store;
