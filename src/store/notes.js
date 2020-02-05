export default {
  state: {
    notes: [],
    index: 0
  },
  mutations: {
    saveNote(state, note) {
      state.notes.push(note);
      state.index = state.notes.length - 1;
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