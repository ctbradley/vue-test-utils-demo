<template>
  <form>
    <input type="text" :value="inputText">
  </form>
</template>

<script>
export default {
  name: "VForm",
  props: {
    inputText: String
  }
};
</script>

<style scoped>
</style>
