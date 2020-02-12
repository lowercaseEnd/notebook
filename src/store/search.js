export default {
  state: {
    response: []
  },
  actions: {
    searchDB(context, query) {
      return new Promise(resolve => {
        let temp = [];
        context.rootState.db.database.orderByChild("title").startAt(query).endAt(query+"\uf8ff").on("value", (result) => {
          result.forEach(res => {
            temp.push({
              ref: res.ref,
              title: res.child("title").val(),
              note: res.child("note").val()
            })
          })
          context.commit("saveResponse", temp);
          resolve();
        })
      })
      
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