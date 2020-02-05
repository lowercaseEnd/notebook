<template>
  <div id="app">
    <Page @saveNote="saveNote" @deleteNote="deleteNote"/>
    <PageList :pages="notes" @changePage="changePage"/>
  </div>
</template>

<script>
import Page from "@/components/Page";
import PageList from "@/components/PageList";

export default {
  name: 'app',
  data() {
    return {
      notes: [],
      index: 0
    }
  },
  components: {
    Page,
    PageList
  },
  methods: {
    saveNote(note) {
      this.notes.push(note);
      this.index = this.notes.length - 1;
    },
    deleteNote() {
      this.notes.slice(this.index, 1);
      this.index = Math.max(this.index - 1, 0);
    },
    changePage(index) {
      this.index = index;
      console.log(this.index);
    }
  }
}
</script>

<style>

</style>
