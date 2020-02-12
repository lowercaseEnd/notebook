<template>
  <section class="search">
    <form @submit.prevent>
      <input type="text" name="" id="" v-model="query" />
      <button type="submit" @click="search">Search</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        query: ""
      };
    },
    methods: {
      search() {
        this.$store.dispatch("searchDB", this.query).then(() => {
          this.$emit("searchResults", this.$store.getters.getResponse);
          this.query = "";
        });
      }
    }
  };
</script>

<style></style>
