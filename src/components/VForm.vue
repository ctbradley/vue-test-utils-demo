<template>
  <form :name="formName">
    <input type="text" :value="inputText">
  </form>
</template>

<script>
export default {
  name: "VForm",
  props: {
    /**
     * comment props to demonstrate behavior
     */
    formName: String,
    inputText: String
  }
};
</script>

<style scoped>
</style>
