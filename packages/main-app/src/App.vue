<template>
  <div id="app">
    <router-link to="/modules/page-constructor/page-list"
      >first page-list</router-link
    ><br />
    <router-link to="/modules/page-constructor/page-details"
      >first page-details</router-link
    ><br />
    <router-view></router-view>
  </div>
</template>

<script>
import test from "@kit/test-a";

export default {
  name: "App",
  components: {},
  mounted() {
    test();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
