<template>
  <section>
    <ul class="notes-list">
      <li class="notes-list__item"
      v-for="(page, index) in pages" :key="index"
      @click="changePage(index)">
        <h2>{{page.title}}</h2>
        <p>{{page.note}}</p>
      </li>
    </ul>
    <button @click="addPage">Add an empty page</button>
  </section>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    changePage(index) {
      this.$store.commit("changePage", index);
    },
    addPage() {
      this.$store.dispatch("saveNoteDB", {title: "", note: ""});
    }
  }
}
</script>