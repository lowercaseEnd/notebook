export default {
  state: {
    notes: [],
    index: 0
  },
  actions: {
    deleteNoteDB(context) {
      let ref = context.state.notes[context.state.index].ref; 
      ref && ref.remove();
      context.commit("deleteNote");
    },
    saveNoteDB(context, data) {
      let page = context.state.notes[context.state.index];
      if(page !== undefined && page.ref) {
        context.dispatch("updateExistingPage", {page: page, data: data});
      } else {
        context.dispatch("insertNewPage", {page: page, data: data});
      }
    },
    updateExistingPage(context, {page, data}) {
      page.ref.update({title: data.title, note: data.note});
      context.commit("changeNote", page);
    },
    async insertNewPage(context, {page, data}) {
      page.ref = await context.rootState.db.database.push(data);
      context.commit("saveNote", page);
    }
  },
  mutations: {
    saveNote(state, note) {
      state.notes.push(note);
      state.index = state.notes.length - 1;
    },
    changeNote(state, note) {
      state.notes[state.index] = note;
    },
    changePage(state, index) {
      state.index = index;
    },
    deleteNote(state) {
      state.notes.splice(state.index, 1);
      state.index = Math.max(state.index - 1, 0);
    },
    addPage(state) {
      state.notes.push({title: "", note: ""});
      state.index = state.notes.length - 1;
    }
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
    getIndex(state) {
      return state.index;
    }
  }
}