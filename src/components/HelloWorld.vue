<template>
  <div class="hello">
    <VFormImport :form-name="formName" :input-text="inputText"/>
    <VFormRequire :form-name="formName" :input-text="inputText"/>
  </div>
</template>

<script>
import VFormImport from "./VForm.vue";

const VFormRequire = require("./VForm.vue");

export default {
  name: "HelloWorld",
  components: {
    VFormImport,
    VFormRequire
  },
  data() {
    return {
      inputText: "default input text",
      formName: "default form name"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
