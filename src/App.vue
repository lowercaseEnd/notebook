<template>
  <div class="app" id="app">
    <div class="page-note">
      <Search @searchResults="showSearch" />
      <Page />
    </div>

    <PageList v-if="!search" :pages="notes" />
    <PageList v-else :pages="foundNotes" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import firebase from "firebase";

  import Page from "@/components/Page";
  import PageList from "@/components/PageList";
  import Search from "@/components/Search";

  export default {
    name: "app",
    data() {
      return {
        search: false,
        foundNotes: []
      }
    },
    mounted() {
      this.getDatabase().once("value", notes => {
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
      PageList,
      Search
    },
    methods: {
      ...mapGetters(["getNotes", "getDatabase"]),
      showSearch(results) {
        console.log(JSON.parse(JSON.stringify(results)));
        if(JSON.stringify(results) === JSON.stringify([])) {
          this.search = false;
        } else {
          this.search = true;
          this.foundNotes = results;
        }
      }
    },
    computed: {
      notes() {
        return this.getNotes();
      }
    }
  };
</script>

<style>
  body,
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .app {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
  .page-note {
    width: 100%;
  }
</style>
