<template>
  <div id="app">
    <Grid />
  </div>
</template>

<script>
import Grid from "./components/Grid";
import 'boxicons';
export default {
  name: 'App',
  components: {
    Grid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  padding:0;
  margin:0
}
</style>
