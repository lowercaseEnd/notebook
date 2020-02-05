<template>
  <div id="app">
    <Page />
    <PageList :pages="notes"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import Page from "@/components/Page";
import PageList from "@/components/PageList";

export default {
  name: 'app',
  components: {
    Page,
    PageList
  },
  methods: {
    ...mapGetters(["getNotes"]),
    deleteNote() {
      this.notes.slice(this.index, 1);
      this.index = Math.max(this.index - 1, 0);
      console.log(this.index);
    },
   
    addPage() {
      console.log(this.notes);
      this.notes.push({title: "", note: ""});
      this.index = this.notes.length - 1;
    }
  },
  computed: {
    notes() {
      return this.getNotes();
    }
  }
}
</script>

<style>

</style>
