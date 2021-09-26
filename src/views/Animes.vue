<template>
  <div class="animes">
    <PageAnimes />
  </div>
</template>

<script>
import PageAnimes from "@/page/PageAnimes.vue"
export default {
  name: "Animes",
  components: {
    PageAnimes,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #fefbfb;
}
</style>
