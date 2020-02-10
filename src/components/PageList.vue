<template>
  <section class="notebook">
    <ul class="notes-list">
      <li class="notes-list__item"
      v-for="(page, index) in pages" :key="index"
      @click="changePage(index)"
      v-bind:class="{ 'active': index === activePage }">
        <h2 class="notes-list__title">{{page.title}}</h2>
        <p>{{page.note}}</p>
      </li>
    </ul>
    <button class="new-page" @click="addPage">Add an empty page</button>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: ["pages"],
  methods: {
    ...mapGetters(["getIndex"]),
    changePage(index) {
      this.$store.commit("changePage", index);
    },
    addPage() {
      this.$store.dispatch("createNoteDB", {title: "", note: ""});
    }
  },
  computed: {
    activePage() {
      return this.getIndex();
    }
  }
}
</script>

<style>
  .notebook {
    max-width: 30%;
    width: 40%;
    background-color: #ecfcff;
    position: relative;
  }
  .notes-list {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .notes-list__title {
    margin: 0;
  }
  .notes-list__item {
    padding: 10px;
    min-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .notes-list__item:hover {
    cursor: pointer;
    background-color: #c5edf5;
  }
  .active {
    background-color: #80cee0;
  }
  .active:hover {
    background-color: #5caec1;
  }
  .new-page {
    border: none;
    background-color: #233b5d;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .new-page:hover {
    background-color: #182c48;
  }
</style>