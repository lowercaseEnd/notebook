export default {
  state: {
    response: {}
  },
  actions: {
    async searchDB(context, query) {
      let res = await context.rootState.db.database.startAt(query)
      .endAt(query+"\uf8ff");
      context.commit("saveResponse", res);
    }
  },
  mutations: {
    saveResponse(state, res) {
      state.response = res;
    }
  },
  getters: {
    getResponse(state) {
      return state.response;
    }
  }
}