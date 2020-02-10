<template>
  <section class="page">
    <div v-if="getNotes[getIndex]">
      <form v-on:submit.prevent>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Message title"
          v-model="title"
          class="title"
        />
        <label for="note">Note</label>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Enter text"
          v-model="note"
          class="content"
        ></textarea>
        <button type="submit" @click="saveNote">Save</button>
        <button type="submit" @click="deleteNote">Delete</button>
      </form>
    </div>
    <div v-else>
      &larr;To get started create a new note.
    </div>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        title: "",
        note: ""
      };
    },
    methods: {
      saveNote() {
        this.$store.dispatch("saveNoteDB", {
          title: this.title,
          note: this.note
        });
        // this.$store.commit("saveNote", {title: this.title, note: this.note});
        this.note = this.title = "";
      },
      deleteNote() {
        this.$store.dispatch("deleteNoteDB");
      }
    },
    computed: {
      ...mapGetters(["getNotes", "getIndex"])
    }
  };
</script>
