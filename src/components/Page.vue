<template>
  <section class="page">
    <div v-if="getNotes[getIndex]">
      <form v-on:submit.prevent>
        <label class="note-label" for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Message title"
          v-model="title"
          class="title"
        />
        <label class="note-label"  for="note">Note</label>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Enter text"
          v-model="note"
          class="content"
        ></textarea>
        <button class="note-button" type="submit" @click="saveNote">Save</button>
        <button class="note-button" type="submit" @click="deleteNote">Delete</button>
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

<style>
  .page {
    width: 100%;
    padding: 30px;
    box-shadow: 30px 0 50px 30px #c1f5ff;
  }
  ::placeholder {
    font-size: 18px;
  }
  .content,
  .title {
    border-style: none;
    border-radius: 3px;
    border: solid 1px rgb(211, 211, 211);
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .content {
    resize: vertical;
    
    min-height: 200px;
  }
  .note-label {
    display: inline-block;
    margin-bottom: 10px;
  }
  .note-button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;

    border-style: none;
    border-radius: 3px;
    
    padding: 10px 15px;
    margin-right: 20px;
    
    background-color: #44abc3;
    color: #ffffff;
    
    cursor: pointer;
  }
  .note-button:hover {
     background-color: #276f80;
  }
</style>