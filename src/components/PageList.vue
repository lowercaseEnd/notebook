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
  </section>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
    }
  }
}
</script>