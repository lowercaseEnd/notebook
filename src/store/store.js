import Vue from "vue";
import Vuex from "vuex";
import notes from "./notes";
import db from "./db";
import search from "./search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes,
    db,
    search
  }
})