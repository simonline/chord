import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  packageVersion: process.env.PACKAGE_VERSION || '0',
}

export default new Vuex.Store({
  state
})
