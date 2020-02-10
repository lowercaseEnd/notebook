import Vue from "vue";
import Vuex from "vuex";
import notes from "./notes";
import db from "./db";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes,
    db
  }
})