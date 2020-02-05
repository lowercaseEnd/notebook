<template>
  <section>
    <form v-on:submit.prevent="saveNote">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" placeholder="Message title" v-model="title">
      <label for="note">Note</label>
      <textarea name="note" id="note" cols="30" rows="10" placeholder="Enter text" v-model="note"></textarea>
      <button type="submit">Save</button>
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
      console.log(`Title: ${this.title}\tNote: ${this.note}`);
    }
  }
}
</script>