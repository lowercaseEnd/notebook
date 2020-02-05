<template>
  <section>
    <form v-on:submit.prevent>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" placeholder="Message title" v-model="title">
      <label for="note">Note</label>
      <textarea name="note" id="note" cols="30" rows="10" placeholder="Enter text" v-model="note"></textarea>
      <button type="submit" @click="saveNote">Save</button>
      <button type="submit" @click="deleteNote">Delete</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      note: ""
    }
  },
  methods: {
    saveNote() {
      this.$emit("saveNote", {title: this.title, note: this.note});
      this.note = this.title = "";
    },
    deleteNote() {
      this.$emit("deleteNote");
    }
  }
}
</script>