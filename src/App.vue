<template>
  <div id="app">
    <Page />
    <PageList :pages="notes"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import firebase from "firebase";

import Page from "@/components/Page";
import PageList from "@/components/PageList";


export default {
  name: 'app',
  mounted() {
    this.getDatabase().once("value", (notes) => {
      notes.forEach(note => {
        this.$store.commit("saveNote", {
          ref: note.ref,
          title: note.child("title").val(),
          note: note.child("note").val()
        });
      });
    });
  },
  components: {
    Page,
    PageList
  },
  methods: {
    ...mapGetters(["getNotes", "getDatabase"]),
  },
  computed: {
    notes() {
      return this.getNotes();
    }
  }
}
</script>

<style>
  body, html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
